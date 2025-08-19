"use client";

import DataTableBase from "@/components/common/DataTable";
import Loader from "@/components/common/Loader";
import DeleteConfirmationModal from "@/components/common/DeleteConfirmationModal";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import EditPatientModal from "@/components/admin/patients/EditPatientModal";
import ViewPatientModal from "@/components/admin/patients/ViewPatientModal";

const AllPatients = () => {
  
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selected, setSelected] = useState({});
  const [patientStatus, setPatientStatus] = useState(""); // Empty by default

  const handleFilterChange = (event) => {
    setPatientStatus(event.target.value);
  };

  const loadPatientsData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/patients", getHeader());
      if (Array.isArray(data.data)) {
        setPatientsList(data.data);
        GetFormatedData(data?.data);
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

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const { data } = await API.delete(`/patients/${selected._id}`, getHeader());
      if (data?.success) {
        toast.success(data?.message);
        setSelected({});
        loadPatientsData();
      } else {
        toast.error(data?.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleting(false);
    }
  };

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
      name: "Father / Guardian CNIC",
      selector: (row) => row.cnic,
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
          <Link href={`/patient-detials?id=${row?._id}`}>
            <button>
              <i class="fas fa-eye"></i>
            </button>
          </Link>
          <button
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() => setSelected(row)}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteConfimation"
            onClick={() => setSelected(row)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  const GetFormatedData = (patientsData) => {
    const data = patientsData.map((row) => ({
      ...row,
      attendant_details: row?.attendant_details?.name,
      cnic: row.cnic ? row.cnic.cnic_number : undefined,
      photocopy: row.cnic?.photocopy ? row.cnic.photocopy : "",
    }));
    return data;
  };

  const filteredPrescriptions = patientsList.filter((patient) => {
    if (!patientStatus) return true; // Show all if no filter is selected
    return patient?.patient_status === patientStatus; // Filter by status
  });

  const FilterButton = () => (
    <div className="form-group">
      <select
        className="col-6 form-control form-select exportBtn"
        name="patient_status"
        value={patientStatus}
        onChange={handleFilterChange} // Handle filter change
      >
        <option value="">All Patients</option>{" "}
        {/* Default option to show all */}
        <option value="alive">Alive</option>
        <option value="deceased">Deceased</option>
      </select>
    </div>
  );

  if (loading) return <Loader />;

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
                <div className="card">
                  <div className="card-header fix-card">
                    <div className="row">
                      <div className="col-8 d-flex gap-2 align-items-center"></div>
                      <div className="col-4 " style={{ textAlign: "right" }}>
                        <Link
                          href="/new-patient"
                          className="btn btn-primary float-end"
                        >
                          New Patient
                        </Link>
                      </div>
                    </div>
                  </div>
                  <DataTableBase
                    columns={columns}
                    data={GetFormatedData(filteredPrescriptions)}
                    filterBtn={<FilterButton />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        modalId="deleteConfimation"
        onConfirm={() => handleDelete()}
        loading={deleting}
      />
      <EditPatientModal
        modalId="editModal"
        data={selected}
        callback={() => loadPatientsData()}
      />
      <ViewPatientModal modalId="viewModal" data={selected} />
      {loading && <Loader />}
    </>
  );
};

export default AllPatients;
