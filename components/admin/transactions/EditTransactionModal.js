import ButtonLoader from "@/components/common/ButtonLoader";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const EditTransactionModal = ({ modalId, data, callback }) => {
  const header = getHeader();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    patient: "",
    zakat_amount: null,
    visits: null,
    date: "",
  });

  // Load patients dropdown
  useEffect(() => {
    const loadPatientsDropdown = async () => {
      try {
        const resposne = await API.get("/patients/dropdown", header);
        if (Array.isArray(resposne?.data)) {
          setPatients(resposne?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    loadPatientsDropdown();
  }, []);

  useEffect(() => {
    setPayload((prev) => {
      return {
        ...prev,
        patient: patients?.find((p) => p?.value == data?.patient_id)?.value,
        zakat_amount: data?.zakat_amount,
        visits: data?.visits,
        date: data?.date,
      };
    });
  }, [data, patients]);

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  // create trnasaction handler
  const updateTransaction = async (e) => {
    e.preventDefault();
    const header = getHeader();

    try {
      setLoading(true);
      const resposne = await API.put(
        `/transactions/${data?._id}`,
        payload,
        header
      );
      if (resposne?.data?.success == true) {
        toast.success(resposne?.data?.message);
        callback();

        // Close the Bootstrap modal
        const modalElement = document.getElementById(modalId);
        const bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.hide();
      } else if (resposne?.data?.success == false) {
        toast.error("Failed to create transaction, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`modal fade`}
      id={modalId}
      tabIndex="-1"
      aria-labelledby="modal-title-edit-row"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal-title-edit-row">
              {data?.name}
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
            <div className="container-fluid">
              <div className="row">
                <form
                  onSubmit={updateTransaction}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="form-group">
                        <select
                          className="form-control form-select"
                          placeholder="Select Patient"
                          name="patient"
                          value={payload.patient}
                          onChange={handleChange}
                          required
                        >
                          <option defaultChecked>Select patient</option>
                          {patients.map((patient, index) => (
                            <option value={patient?.value} key={index}>
                              {patient?.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <TextInput
                        required
                        type="date"
                        name="date"
                        placeholder="Date"
                        selected={payload.date}
                        value={payload.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-4">
                      <TextInput
                        required
                        type="number"
                        min={1}
                        name="zakat_amount"
                        placeholder="Zakat amout"
                        value={payload.zakat_amount}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-xl-4">
                      <TextInput
                        required
                        type="number"
                        min={1}
                        name="visits"
                        placeholder="Visits"
                        value={payload.visits}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4"></div>
                    <div className="form-group text-right mt-5 col-4">
                      <button
                        type="submit"
                        className="btn btn-primary float-end"
                        disabled={loading}
                      >
                        {loading ? <ButtonLoader /> : "Update"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;
