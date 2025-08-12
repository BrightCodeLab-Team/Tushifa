"use client";

import Loader from "@/components/common/Loader";
import PrescriptionViewModel from "@/components/pharmcist/prescriptions/PrescriptionView";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const DataTableBase = dynamic(() => import("@/components/common/DataTable"), {
  ssr: false,
});

const AllPrescription = () => {
  const session = useSession();
  const user = session?.data?.user;
  const header = getHeader();
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [pharmacyId, setPharmacyId] = useState("");

  useEffect(() => {
    const getPharmacyId = user?.pharmacyId;
    setPharmacyId(getPharmacyId);
    loadPrescriptionsData();
    console.log("user", user);
  }, [session, pharmacyId]);

  console.log("pharmacy_id in useState ", pharmacyId);

  const loadPrescriptionsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get(
        `/prescriptions/approved?pharmacy_id=${pharmacyId}`,
        header
      );
      if (Array.isArray(data.prescriptions)) {
        setPrescriptions(data.prescriptions);
        console.log("Prescrition ", data.prescriptions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = async (data) => {
    console.log("Print data => ", data);
    try {
      const printableContent = `
        <div>
          <h3 style="text-align: center;">Prescription Detail</h3>
          <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
            <tr>
              <td style="padding: 8px;"><strong>Pharmacy Name:</strong></td>
              <td style="padding: 8px;">${data?.pharmacy_name || "N/A"}</td>
              <td style="padding: 8px;"><strong>Date:</strong></td>
              <td style="padding: 8px;">${new Date(
                data?.createdAt
              ).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Patient ID:</strong></td>
              <td style="padding: 8px;">${
                data?.patient?.patient_code || "N/A"
              }</td>
              <td style="padding: 8px;"><strong>Patient Name:</strong></td>
              <td style="padding: 8px;">${data?.patient?.name || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Condition:</strong></td>
              <td style="padding: 8px;">Thalassemia/Leukemia</td>
              <td style="padding: 8px;"><strong>Status:</strong></td>
              <td style="padding: 8px;">${
                data?.approved ? "Approved" : "Not Approved"
              }</td>
            </tr>
          </table>
  
          <hr style="margin: 20px 0;" />
  
          <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
            <thead>
              <tr>
                <th style="border: 1px solid #000; padding: 8px; text-align: left;">Prescription</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: left;">Quantity</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: left;">Price/Quantity</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: left;">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              ${data?.prescription_names
                ?.map(
                  (med) => `
                    <tr>
                      <td style="border: 1px solid #000; padding: 8px;">${
                        med?.name
                      }</td>
                      <td style="border: 1px solid #000; padding: 8px;">${
                        med?.quantity
                      }</td>
                      <td style="border: 1px solid #000; padding: 8px;">${
                        med?.amount / med?.quantity || "N/A"
                      }</td>
                      <td style="border: 1px solid #000; padding: 8px;">${
                        med?.amount || 0
                      }</td>
                    </tr>
                  `
                )
                ?.join("")}
            </tbody>
          </table>
  
          <hr style="margin: 20px 0;" />
  
          <h4 style="text-align: right;">Total Amount: ${
            data?.prescription_amount || "N/A"
          }</h4>
        </div>
      `;

      const printWindow = window.open("", "_blank");
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Prescription</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 20px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }
              th, td {
                border: 1px solid #000;
                padding: 8px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            ${printableContent}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    } catch (error) {
      console.error("Error fetching prescription details:", error);
    }
  };

  const columns = [
    {
      name: "Prescription photocopy",
      // selector: (row) => row?.photocopy,
      cell: (row) => (
        <Image src={row?.photocopy} alt="" width={40} height={40} />
      ),
      sortable: true,
    },
    {
      name: "Patient name",
      selector: (row) => row?.patient?.name,
      sortable: true,
    },
    {
      name: "Pharmacy name",
      selector: (row) => row?.pharmacy_name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Status",
      // selector: (row) => row.approved,
      cell: (row) => {
        return (
          <span style={{ color: row?.approved ? "green" : "red" }}>
            {row?.approved ? "Approved" : "Not approved"}
          </span>
        );
      },
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="table-action d-flex align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#prescriptionViewModel"
            onClick={() => setSelected(row)}
          >
            <i class="fas fa-eye"></i>
          </button>
          <button
            className="ml-2"
            onClick={() => handlePrint(row)}
            title="Print Prescription"
          >
            <i className="fas fa-print"></i>
          </button>
        </div>
      ),
    },
  ];

  if (loading) return <Loader />;

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all_prescriptions main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">My Approved Prescriptions</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card pt-3">
                  <DataTableBase
                    columns={columns}
                    data={prescriptions}
                    isPrescription={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
      <PrescriptionViewModel
        data={selected}
        modalId={"prescriptionViewModel"}
        callback={() => loadPrescriptionsData()}
        action={false}
      />
    </>
  );
};

export default AllPrescription;
