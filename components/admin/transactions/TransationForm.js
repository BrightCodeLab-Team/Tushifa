"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TransactionForm = () => {
  const router = useRouter();
  const header = getHeader();

  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [payload, setPayload] = useState({
    patient: "",
    prescription_amount: null,
    visits: null,
    date: "",
  });

  // Load patients dropdown
  useEffect(() => {
    const loadPatientsDropdown = async () => {
      try {
        const { data } = await API.get("/patients/dropdown", header);
        if (Array.isArray(data)) {
          setPatients(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadPatientsDropdown();
  }, []);

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  //   add transaction handler
  const addTransaction = async (e) => {
    e.preventDefault();
    const header = getHeader();
    console.log(payload);

    try {
      setLoading(true);
      const { data } = await API.post("/transactions", payload, header);
      if (data?.success == true) {
        toast.success(data?.message);
        setPayload({
          patient: "",
          prescription_amount: null,
          visits: null,
          date: "",
        });
        router.push("/all-transactions");
      } else if (data?.success == false) {
        toast.error("Failed to add Transaction, please try again");
      }
    } catch (error) {
      if (error.response.data?.message) {
        toast.error(error.response.data?.message);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={addTransaction}>
        <div className="row">
          <div className="col-xl-4">
            <TextInput
              required
              type="date"
              name="date"
              placeholder="Date"
              value={payload.date}
              onChange={handleChange}
            />
            <TextInput
              required
              type="number"
              min={1}
              name="prescription_amount"
              placeholder="Prescription Amount"
              value={payload.zakat_amount}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4">
            <TextInput
              required
              type="number"
              min={1}
              name="patient_code"
              placeholder="Patient Code"
              value={payload.zakat_amount}
              onChange={handleChange}
            />
            <TextInput
              required
              type="text"
              min={1}
              name="attending_physician_name"
              placeholder="Attending Physician Name"
              value={payload.zakat_amount}
              onChange={handleChange}
            />
          </div>
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
          <div className="form-group ml-auto mt-5 mr-3">
            <button type="submit" className="btn btn-primary float-end">
              {loading ? <ButtonLoader /> : "Save"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TransactionForm;
