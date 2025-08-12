"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const NewPrescription = () => {
  const router = useRouter();
  const header = getHeader();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    photocopy: "",
    patient: "",
    prescriptions: [{ name: "", quantity: 1, amount: 0 }],
  });

  // Load patients dropdown
  useEffect(() => {
    const loadPatientsDropdown = async () => {
      try {
        const { data } = await API.get("/patients/dropdown", header);
        if (Array.isArray(data)) {
          setPatients(data);
          console.log("Patient Data: ", data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadPatientsDropdown();
  }, []);

  // Update payload state on input change
  const handleChange = (event) => {
    setPayload((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Update prescription name and quantity
  const handlePrescriptionChange = (index, key, value) => {
    const updatedPrescriptions = [...payload.prescriptions];
    updatedPrescriptions[index][key] =
      key === "quantity" ? parseInt(value) : value;
    setPayload((prev) => ({ ...prev, prescriptions: updatedPrescriptions }));
  };

  // Add new prescription field
  const addPrescriptionField = () => {
    setPayload((prev) => ({
      ...prev,
      prescriptions: [
        ...prev.prescriptions,
        { name: "", quantity: 1, amount: 0 },
      ],
    }));
  };

  const createPrescription = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photocopy", payload.photocopy);
    console.log("photocopy state: ", payload.photocopy);
    formData.append("patient", payload.patient);

    payload.prescriptions.forEach((prescription) => {
      formData.append("prescription_name", prescription.name);
      formData.append("prescription_quantity", prescription.quantity);
    });

    console.log("formData: ", formData);

    try {
      setLoading(true);
      const { data } = await API.post("/prescriptions", formData, header);
      if (data?.success) {
        toast.success(data?.message);
        setPayload({
          photocopy: "",
          patient: "",
          prescriptions: [{ name: "", quantity: 1, amount: 0 }],
        });
        console.log("Payload: ", payload);
        router.push("/all-prescription");
      } else {
        toast.error("Failed to create prescription, please try again");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-body">
      <div className="warper container-fluid">
        <div className="new_prescription main_container">
          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4 className="text-primary">New Prescription</h4>
                <p className="mb-0">Add New Prescription</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card shadow mb-4 pb-4">
                <div className="card-header">
                  <h4 className="card-title">Patient Information</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={createPrescription}>
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="form-group row widget-3">
                          <div className="col-lg-12">
                            <FileInput
                              required
                              label="Prescription photocopy"
                              onChange={(file) => {
                                setPayload((prev) => {
                                  return {
                                    ...prev,
                                    photocopy: file,
                                  };
                                });
                              }}
                            />
                          </div>
                        </div>{" "}
                      </div>
                      <div className="col-xl-4">
                        <TextInput
                          required
                          type="date"
                          name="date"
                          placeholder="Select Date"
                          value={payload.date}
                          onChange={handleChange}
                        />
                        {payload.prescriptions.map((prescription, index) => (
                          <div key={index} className="mb-2">
                            <TextInput
                              required
                              type="text"
                              placeholder={`Prescription Name ${index + 1}`}
                              value={prescription.name}
                              onChange={(e) =>
                                handlePrescriptionChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          className="btn btn-primary float-end mt-3"
                          onClick={addPrescriptionField}
                        >
                          {loading ? (
                            <ButtonLoader />
                          ) : (
                            "Add Another Prescription"
                          )}
                        </button>
                      </div>
                      <div className="col-xl-4">
                        <div className="form-group">
                          <select
                            className="form-control form-select"
                            name="patient"
                            value={payload.patient}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              Select Patient Name
                            </option>
                            {patients.map((patient) => (
                              <option key={patient.value} value={patient.value}>
                                {patient.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {payload.prescriptions.map((prescription, index) => (
                          <TextInput
                            key={index}
                            required
                            type="number"
                            placeholder={`Quantity ${index + 1}`}
                            value={prescription.quantity}
                            onChange={(e) => {
                              console.log(
                                `Updating quantity for prescription ${index} to`,
                                e.target.value
                              );
                              handlePrescriptionChange(
                                index,
                                "quantity",
                                e.target.value
                              );
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-8"></div>
                      <div className="col-4 text-right">
                        <button
                          type="submit"
                          className="btn btn-primary float-end"
                        >
                          {loading ? <ButtonLoader /> : "Create"}
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
    </div>
  );
};

export default NewPrescription;
