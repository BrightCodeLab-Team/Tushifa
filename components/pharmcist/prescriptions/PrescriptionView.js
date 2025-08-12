import ButtonLoader from "@/components/common/ButtonLoader";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const PrescriptionViewModel = ({ modalId, data }) => {
  const [checkedPrescriptions, setCheckedPrescriptions] = useState({});

  console.log("data", data);
  const handleCheckboxChange = (prescriptionId, isChecked) => {
    setCheckedPrescriptions((prevChecked) => ({
      ...prevChecked,
      [prescriptionId]: isChecked,
    }));
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
                <div className="col-8">Attending Physician Name</div>
                <div className="col-4">
                  {data?.patient?.attending_physician_name}
                </div>
              </div>

              {data?.prescription_names?.map((prescription, i) => (
                <div
                  key={prescription.prescriptionId}
                  className="row py-3"
                  style={{
                    borderBottom: "1px solid #e0e0e0",
                    backgroundColor: i % 2 === 0 ? "#f2f2f2" : "transparent",
                  }}
                >
                  <div className="col-4">
                    <strong>Prescription Name:</strong> {prescription.name}
                  </div>
                  <div className="col-3">
                    <strong>Amount:</strong> Rs. {prescription.amount}
                  </div>
                  <div className="col-3">
                    <strong>Quantity:</strong> ({prescription.quantity})
                  </div>
                  <div className="col-2">
                    <input
                      type="checkbox"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      checked={!!prescription.isGiven}
                      disabled
                    />
                  </div>
                </div>
              ))}

              <div className="row py-3" style={{ backgroundColor: "#f2f2f2" }}>
                <div className="col-8">Total Amount</div>
                <div className="col-4">{data?.prescription_amount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionViewModel;
