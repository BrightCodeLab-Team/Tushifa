"use client";

import API from "@/utils/api";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import Loader from "@/components/common/Loader";
import React, { useEffect, useState } from "react";
import getHeader from "@/utils/getHeader";

const DataTableBase = dynamic(() => import("@/components/common/DataTable"), {
  ssr: false,
});
const DeleteConfirmationModal = dynamic(
  () => import("@/components/common/DeleteConfirmationModal"),
  {
    ssr: false,
  }
);
const EditTransactionModal = dynamic(
  () => import("@/components/admin/transactions/EditTransactionModal"),
  {
    ssr: false,
  }
);

const AllTransactions = () => {
  const header = getHeader();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    loadTransactions();
  }, []);
  const loadTransactions = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/transactions");
      console.log("Data/Error in GET /transactions: ", data);
      if (Array.isArray(data.data)) {
        const updatedData = data?.data?.map((trans) => {
          return {
            serialNumber: trans?.sNo,
            _id: trans?._id,
            patient_id: trans?.patient?._id,
            patient_code: trans?.patient?.patient_code,
            patient_name: trans?.patient?.name,
            pharmacy_name: trans?.pharmacy?.name,
            age: trans?.patient?.age,
            gender: trans?.patient?.gender,
            contact: trans?.patient?.contact,
            address: trans?.patient?.address,
            patient_condition: trans?.patient?.patient_condition,
            father_status: trans?.patient?.father_status,
            father_profession: trans?.patient?.father_profession,
            income: trans?.patient?.income,
            eligibility: trans?.patient?.eligibility,
            interview_conducted_by: trans?.patient?.interview_conducted_by,
            narrative: trans?.patient?.narrative,
            symptoms_time: trans?.patient?.symptoms_time,
            note: trans?.patient?.note,
            cnic: trans?.patient?.cnic?.cnic_number,
            attending_physician_name: trans?.patient?.attending_physician_name,
            attendant_name: trans?.patient?.attendant_details?.name,
            attendant_relation_to_patient:
              trans?.patient?.attendant_details?.relation_to_patient,
            zakat_amount: trans.prescription_amount,
            visits: trans.visits,
            date: trans.date,
          };
        });
        setData(updatedData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const { data } = await API.delete(
        `/transactions/${selected._id}`,
        header
      );
      if (data?.success) {
        toast.success(data?.message);
        setSelected({});
        loadTransactions();
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
      name: "S.No.",
      selector: (row) => row.serialNumber,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.date).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Patient Code",
      selector: (row) => row?.patient_code,
      sortable: true,
    },
    {
      name: "Patient name",
      selector: (row) => row?.patient_name,
      sortable: true,
    },
    {
      name: "Visits",
      selector: (row) => row?.visits,
      sortable: true,
    },
    {
      name: "Patient condition",
      selector: (row) => row?.patient_condition,
      sortable: true,
    },
    {
      name: "Pharmacy name",
      selector: (row) => row?.pharmacy_name || "null",
      sortable: true,
    },
    {
      name: "Prescription expenses",
      selector: (row) => row?.zakat_amount,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="table-action d-flex align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() => {
              setSelected(row);
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteConfimation"
            onClick={() => {
              setSelected(row);
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all_prescriptions main_container">
            <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <div className="welcome-text">
                  <h4 className="text-primary">All Transactions</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  {/* <div className="card-header fix-card">
                    <div className="row">
                      <div className="col-4">
                        <Link
                          href="/new-transaction"
                          className="btn btn-primary float-end"
                        >
                          New Transaction
                        </Link>
                      </div>
                    </div>
                  </div> */}
                  <DataTableBase columns={columns} data={data} isTransaction />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
      <DeleteConfirmationModal
        modalId="deleteConfimation"
        onConfirm={() => handleDelete()}
        loading={deleting}
      />
      <EditTransactionModal
        modalId="editModal"
        data={selected}
        callback={() => {
          setSelected({});
          loadTransactions();
        }}
      />
    </>
  );
};

export default AllTransactions;
