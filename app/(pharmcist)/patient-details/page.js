"use client";

import { useState, useEffect } from "react";
import PrescriptionFulfillment from "@/components/pharmcist/patients/PrescriptionFulfillment";
import API from "@/utils/api";
import Image from "next/image";
import React from "react";

const PatientDetails = ({ searchParams }) => {
  const [patient, setPatient] = useState({});
  const [prescription, setPrescription] = useState(null);
  const [pharmacy, setPharmacy] = useState(null);

  console.log("PatientDetails -> searchParams", searchParams);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const { data } = await API.get(`/patients/${searchParams.id}`);
        setPatient(data?.patient || {});
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPrescriptionDetails = async () => {
      try {
        const { data } = await API.get(
          `/prescriptions/patient-prescription?patient_id=${searchParams.id}`
        );
        setPrescription(data?.prescription);
        setPharmacy(data?.prescription?.pharmacyId || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatientDetails();
    fetchPrescriptionDetails();
  }, [searchParams.id]);

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card py-4 px-5">
                  <div className="row page-titles">
                    <div className="col-sm-6 p-md-0">
                      <div className="welcome-text">
                        <h4 className="text-primary">Patient Details</h4>
                      </div>
                    </div>
                  </div>
                  <div className="insertHere px-4">
                    <div className="row py-3">
                      <div className="col-8">Patient Code</div>
                      <div className="col-4">{patient?.patient_code}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Name</div>
                      <div className="col-4">{patient?.name}</div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Age</div>
                      <div className="col-4">{patient?.age}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Gender</div>
                      <div className="col-4">{patient?.gender}</div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Contact</div>
                      <div className="col-4">{patient?.contact}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Address</div>
                      <div className="col-4">{patient?.address}</div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Father / Guardian CNIC</div>
                      <div className="col-4">{patient?.cnic?.cnic_number}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Attending Physician name</div>
                      <div className="col-4">
                        {patient?.attending_physician_name}
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Attendent Name</div>
                      <div className="col-4">
                        {patient?.attendant_details?.name}
                      </div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Attendent contact</div>
                      <div className="col-4">
                        {patient?.attendant_details?.contact}
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Attendent relation to patient</div>
                      <div className="col-4">
                        {patient?.attendant_details?.relation_to_patient}
                      </div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Patient condition</div>
                      <div className="col-4">{patient?.patient_condition}</div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Father status</div>
                      <div className="col-4">{patient?.father_status}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Father / Guardian profession</div>
                      <div className="col-4">{patient?.father_profession}</div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Eligibility</div>
                      <div className="col-4">{patient?.eligibility}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Interview conducted by</div>
                      <div className="col-4">
                        {patient?.interview_conducted_by}
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Narrative</div>
                      <div className="col-4">{patient?.narrative}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Symptoms time</div>
                      <div className="col-4">{patient?.symptoms_time}</div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Note</div>
                      <div className="col-4">{patient?.note}</div>
                    </div>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Visits</div>
                      <div className="col-4">{patient?.visits}</div>
                    </div>
                    <div className="row py-3">
                      <div className="col-8">Zakat amount</div>
                      <div className="col-4">{patient?.zakat_amount}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Prescriptions detials */}
            {prescription && (
              <div className="card py-4 px-5">
                <div className="row page-titles">
                  <div className="col-sm-6 p-md-0">
                    <div className="welcome-text">
                      <h4 className="text-primary">Prescription Details</h4>
                    </div>
                  </div>
                </div>
                <div className="insertHere px-4">
                  <div className="py-3">
                    <div style={{ color: "black", textAlign: "center" }}>
                      Prescriptions photocopy
                    </div>
                    <div className="mt-3">
                      <Image
                        src={prescription?.photocopy}
                        alt="Prescription"
                        width={500}
                        height={350}
                        style={{ width: "100%", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pharmacy details */}
            {pharmacy && (
              <div className="card py-4 px-5">
                <div className="row page-titles">
                  <div className="col-sm-6 p-md-0">
                    <div className="welcome-text">
                      <h4 className="text-primary">Pharmacy Details</h4>
                    </div>
                  </div>
                </div>
                <div className="insertHere px-4">
                  <div
                    className="row py-3"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <div className="col-8">Name</div>
                    <div className="col-4">{pharmacy?.name}</div>
                  </div>
                  <div className="row py-3">
                    <div className="col-8">Contact</div>
                    <div className="col-4">{pharmacy?.contact}</div>
                  </div>
                  <div
                    className="row py-3"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <div className="col-8">Address</div>
                    <div className="col-4">{pharmacy?.address}</div>
                  </div>
                  <div className="row py-3">
                    <div className="col-8">Point person</div>
                    <div className="col-4">{pharmacy?.point_person}</div>
                  </div>
                  {prescription?.fulfillment && (
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <div className="col-8">Fulfillment by pharmacy</div>
                      <div className="col-4">
                        PKR {prescription?.totalAmount}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {pharmacy && !prescription?.fulfillment && (
              <PrescriptionFulfillment patientId={patient?._id} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
