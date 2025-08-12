"use client";

import WSStatisticsCards from "@/components/admin/dashboard/WSStatisticsCards";
import EditPatientModal from "@/components/admin/patients/EditPatientModal";
import ViewPatientModal from "@/components/admin/patients/ViewPatientModal";
import DataTableBase from "@/components/common/DataTable";
import customStyles from "@/components/common/DataTableStyle";
import DeleteConfirmationModal from "@/components/common/DeleteConfirmationModal";
import Loader from "@/components/common/Loader";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import React, { useEffect, useState } from "react";

const WeeklySummary = () => {
  const header = getHeader();
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [statistics, setStatistics] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [sortedDays, setSortedDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedType, setSelectedType] = useState("new_patient");

  useEffect(() => {
    loadStatisticsData();
  }, []);

  useEffect(() => {
    loadPatientsData();
  }, [selectedDay, selectedType]); // Reload when the day or type changes

  const loadStatisticsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get(
        `/admin-statistics/weekly-statistics`,
        header
      );
      if (data?.statistics) {
        console.log("----> weekly summary statistics", data.statistics);
        setStatistics(data.statistics);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadPatientsData = async () => {
    try {
      setLoading(true);
      const { data } = await API.get(
        `/patients/summary?day=${selectedDay}&patientType=${selectedType}`,
        header
      );
      if (Array.isArray(data.data)) {
        setPatientsList(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      name: "Patient code",
      selector: (row) => row.patient_code,
      sortable: true,
    },
    { name: "Patient name", selector: (row) => row.name, sortable: true },
    { name: "Age", selector: (row) => row.age, sortable: true },
    { name: "Contact", selector: (row) => row.contact, sortable: true },
    { name: "Gender", selector: (row) => row.gender, sortable: true },
    {
      name: "CNIC number",
      selector: (row) => row.cnic?.cnic_number,
      sortable: true,
    },
    { name: "Address", selector: (row) => row.address, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <div className="table-action d-flex align-items-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#viewModal"
            onClick={() => setSelected(row)}
          >
            <i className="fas fa-eye"></i>
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    let today = new Date().getDay(); // // Get today's day index (0 = Sunday, 1 = Monday, etc.)
    // // let nextDay = (today + 1) % 7; // Get the next day's index

    const orderedDays = [
      daysOfWeek[today], // Show the next day as the "current" day
      ...daysOfWeek.slice(0, today).reverse(), // Days before next day (descending)
      ...daysOfWeek.slice(today + 1).reverse(), // Days after next day
    ];

    setSortedDays(orderedDays);
    setSelectedDay(orderedDays[0]); // Default to "tomorrow" as the selected day
  }, []);

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const FilterButton = () => (
    <div className="form-group">
      <select
        className="col-6 form-control form-select exportBtn"
        name="day"
        value={selectedDay}
        onChange={handleDayChange}
      >
        {sortedDays.map((day) => (
          <option key={day} value={day}>
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );

  const FilterButtonForVisit = () => (
    <div className="form-group">
      <select
        className="col-6 form-control form-select exportBtn"
        name="patient_type"
        onChange={handleTypeChange}
        value={selectedType}
      >
        <option value="new_patient" defaultChecked>
          New Patient
        </option>
        <option value="visited_patient">Visited Patient</option>
      </select>
    </div>
  );

  const GetFormatedData = (patientsData) =>
    patientsData.map((row) => ({
      ...row,
      attendant_details: row?.attendant_details?.name,
      cnic: row.cnic ? row.cnic.cnic_number : undefined,
      photocopy: row.cnic?.photocopy || "",
    }));

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <>
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="row page-titles mx-0">
            <div className="col-lg-12 p-md-0">
              <h4 className="text-primary">
                Weekly <span className="names">Summary</span>
              </h4>
            </div>
          </div>
          <WSStatisticsCards statistics={statistics} />
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
                  <DataTableBase
                    columns={columns}
                    data={GetFormatedData(patientsList)}
                    filterBtn={<FilterButton />}
                    filterButtonForVisit={<FilterButtonForVisit />}
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

export default WeeklySummary;
