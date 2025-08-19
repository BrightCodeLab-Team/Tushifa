import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";

const EditPrescriptionModal = ({ modalId, data, callback }) => {
  
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [payload, setPayload] = useState({
    photocopy: "",
    patient: "",
    prescriptions: [], // Added prescriptions here
  });

  // Load patients dropdown
  const loadPatientsDropdown = useCallback(async () => {
    try {
      const response = await API.get("/patients/dropdown", getHeader());
      if (Array.isArray(response?.data)) {
        setPatients(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadPatientsDropdown();
  }, [loadPatientsDropdown]);

  useEffect(() => {
    setImage(data?.photocopy);
    setPayload({
      photocopy: "",
      patient: data?.patient?._id || "",
      prescriptions: data?.prescription_names?.map((p) => ({
        id: p._id,
        name: p.name,
        quantity: p.quantity,
      })),
    });
  }, [data]);

  // Handle patient and photocopy changes
  const handleChange = (event) => {
    setPayload((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Handle changes to prescription fields
  const handlePrescriptionChange = (index, key, value) => {
    const updatedPrescriptions = [...payload.prescriptions];
    updatedPrescriptions[index][key] = value;
    setPayload((prev) => ({
      ...prev,
      prescriptions: updatedPrescriptions,
    }));
  };

  // Update prescription handler
  const updatePrescription = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photocopy", payload.photocopy);
    formData.append("patient", payload.patient);

    // Send prescription_names as a stringified array
    formData.append(
      "prescription_names",
      JSON.stringify(payload.prescriptions)
    );

    try {
      setLoading(true);
      const response = await API.put(
        `/prescriptions/${data?._id}`,
        formData,
        getHeader()
      );
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        callback();

        if (typeof window !== "undefined" && window.bootstrap) {
          const modalElement = document.getElementById(modalId);
          if (modalElement) {
            const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
            if (bootstrapModal) {
              bootstrapModal.hide();
            } else {
              console.error("Bootstrap modal instance not found.");
            }
          } else {
            console.error("Modal element not found.");
          }
        }
      } else {
        toast.error("Failed to update prescription, please try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating the prescription");
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
                  onSubmit={updatePrescription}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group row widget-3">
                        <div
                          className="col-lg-12"
                          style={{
                            width: 200,
                            height: 300,
                            overflow: "hidden",
                          }}
                        >
                          <FileInput
                            required
                            label="Prescription photocopy"
                            file={image}
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
                      </div>
                    </div>

                    <div className="col-xl-12  pt-5">
                      <div className="form-group">
                        <select
                          className="form-control form-select"
                          placeholder="Gender"
                          name="patient"
                          value={payload.patient}
                          onChange={handleChange}
                        >
                          <option defaultChecked>Select patient</option>
                          {patients.map((patient, index) => (
                            <option value={patient?.value} key={index}>
                              {patient?.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-12 pt-4">
                      {payload?.prescriptions?.map((prescription, index) => (
                        <div key={index} className="row mb-3">
                          <div className="col-6">
                            <TextInput
                              required
                              type="text"
                              name="name"
                              placeholder="Prescription Name"
                              value={prescription?.name}
                              onChange={(e) =>
                                handlePrescriptionChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="col-6">
                            <TextInput
                              required
                              type="number"
                              name="quantity"
                              placeholder="Quantity"
                              value={prescription?.quantity}
                              onChange={(e) =>
                                handlePrescriptionChange(
                                  index,
                                  "quantity",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
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

export default EditPrescriptionModal;
