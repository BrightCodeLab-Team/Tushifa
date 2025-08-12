import ButtonLoader from "@/components/common/ButtonLoader";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ViewPrescriptionsModal = ({ modalId, data, callback, action = true }) => {
  const [loading, setLoading] = useState(false);
  const [amounts, setAmounts] = useState({});
  const [checkedPrescriptions, setCheckedPrescriptions] = useState({});
  const session = useSession();
  const user = session?.data?.user;

  const handleAmountChange = (prescriptionId, value) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [prescriptionId]: value,
    }));
  };

  const handleCheckboxChange = (prescriptionId, isChecked) => {
    setCheckedPrescriptions((prevChecked) => ({
      ...prevChecked,
      [prescriptionId]: isChecked,
    }));
  };

  const handleUpdate = async () => {
    const header = getHeader();

    try {
      setLoading(true);

      const updatedPrescriptions = data?.prescription_names.map(
        (prescription) => {
          const amountInput = amounts[prescription.prescriptionId] || 0;
          const quantity = prescription.quantity || 0;
          const totalAmount = amountInput * quantity;

          return {
            prescriptionId: prescription.prescriptionId,
            amount: totalAmount,
            given: !!checkedPrescriptions[prescription.prescriptionId],
          };
        }
      );

      const response = await API.put(
        `/prescriptions/patient-prescription?patient_id=${data?.patient?._id}`,
        {
          pharmacyId: user?.pharmacyId,
          prescriptions: updatedPrescriptions,
        },
        header
      );

      if (response?.data?.success) {
        const approvalResponse = await API.put(
          `/prescriptions/${data?._id}/approve`,
          { pharmacyId: user?.pharmacyId },
          header
        );

        if (approvalResponse?.data?.success) {
          toast.success(response?.data?.message);
          callback();
          document.getElementById(modalId)?.classList.remove("show");
          document.body.classList.remove("modal-open");
          document.querySelector(".modal-backdrop")?.remove();
          // ✅ Close modal properly
          const modalElement = document.getElementById(modalId);
          if (modalElement) {
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance?.hide();
          }
        } else {
          toast.error(response?.data?.message);
          document.getElementById(modalId)?.classList.remove("show");
          document.body.classList.remove("modal-open");
          document.querySelector(".modal-backdrop")?.remove();
          // ✅ Close modal properly
          const modalElement = document.getElementById(modalId);
          if (modalElement) {
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance?.hide();
          }
        }
      }
    } catch (error) {
      console.log(error);
      // toast.error("An error occurred while updating the prescription.");
    } finally {
      setLoading(false);
      // ✅ Re-fetch prescription data after successful update
      callback();
    }
  };

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
        style={{ maxWidth: "1200px", width: "100%" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="myModalLabel">
              <img
                className="rounded-circle"
                width="35"
                src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                alt=""
              />
              {`${data?.patient?.name} patient`}
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="insertHere">
              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Patient Name</div>
                <div className="col-4">{data?.patient?.name}</div>
              </div>
              <div className="row py-3">
                <div className="col-8">Attending Physician name</div>
                <div className="col-4">
                  {data?.patient?.attending_physician_name}
                </div>
              </div>
              <div className="py-3">
                <div style={{ color: "black", textAlign: "center" }}>
                  Prescriptions photocopy
                </div>
                <div className="mt-3">
                  <Image
                    src={data?.photocopy}
                    alt="Prescription"
                    width={500}
                    height={350}
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Render prescription names and input fields for amounts */}
              <div className="prescriptions-section">
                {data?.prescription_names?.map((prescription) => {
                  const totalAmount =
                    (amounts[prescription.prescriptionId] || 0) *
                    (prescription.quantity || 0);

                  return (
                    <div
                      key={prescription.prescriptionId}
                      className="row py-3 d-flex align-items-center"
                    >
                      <div className="col-3">
                        <TextInput
                          type="text"
                          className="form-control"
                          placeholder="Enter amount"
                          name="name"
                          value={prescription.name || ""}
                          disabled
                        />
                      </div>
                      <div className="col-2">
                        <TextInput
                          type="number"
                          className="form-control"
                          placeholder="Enter quantity"
                          name="quality"
                          value={prescription.quantity || ""}
                          disabled
                        />
                      </div>
                      <div className="col-3">
                        <TextInput
                          type="number"
                          className="form-control"
                          placeholder="Enter amount"
                          name="amount"
                          value={amounts[prescription.prescriptionId] || ""}
                          onChange={(e) =>
                            handleAmountChange(
                              prescription.prescriptionId,
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="col-3">
                        <TextInput
                          type="number"
                          className="form-control"
                          placeholder="Total Amount"
                          name="total_one_presciption_amount"
                          value={totalAmount || ""}
                          disabled
                        />
                      </div>
                      <div className="col-0">
                        <input
                          type="checkbox"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "20px",
                          }}
                          checked={
                            !!checkedPrescriptions[prescription.prescriptionId]
                          }
                          onChange={(e) =>
                            handleCheckboxChange(
                              prescription.prescriptionId,
                              e.target.checked
                            )
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {action ? (
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                {loading ? <ButtonLoader /> : "Approve & Update"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ViewPrescriptionsModal;
