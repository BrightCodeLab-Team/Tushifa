"use client";

import dynamic from "next/dynamic";
const DataTableBase = dynamic(() => import("@/components/common/DataTable"), {
  ssr: false,
});
import Loader from "@/components/common/Loader";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";

const AllPatients = () => {
  
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPatientsData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/patients", getHeader());
      if (data?.data && Array.isArray(data.data)) {
        setPatientsList(data.data);
      } else {
        console.error("Unexpected API response:", data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPatientsData();
  }, [loadPatientsData]);

  const columns = [
    {
      name: "Patient code",
      selector: (row) => row.patient_code,
      sortable: true,
    },
    {
      name: "Patient name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },

    {
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "CNIC number",
      selector: (row) => row.cnic.cnic_number,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="table-action d-flex align-items-center">
          <Link href={`/patient-details?id=${row?._id}`}>
            <i class="fas fa-eye"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">All Patient</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card pt-4">
                  <DataTableBase columns={columns} data={patientsList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default AllPatients;
