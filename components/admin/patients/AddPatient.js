"use client";

import ButtonLoader from "@/components/common/ButtonLoader";
import FileInput from "@/components/common/FileInput";
import Loader from "@/components/common/Loader";
import RadioInput from "@/components/common/RadioInput";
import TextAreaInput from "@/components/common/TextAreaInput";
import TextInput from "@/components/common/TextInput";
import API from "@/utils/api";
import getHeader from "@/utils/getHeader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddPatient = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    note: "",
    cnic_number: "",
    father_cnic_number: "",
    photocopy: "",
    attending_physician_name: "",
    attendantName: "",
    attendantRelation: "",
    patient_condition: "",
    patient_status: "",
    father_status: "",
    father_name: "",
    father_profession: "",
    income: null,
    eligibility: "",
    interview_conducted_by: "",
    narrative: "",
    symptoms_time: "",
    date: "",
  });

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  //   add patient handler
  const addPatient = async (e) => {
    e.preventDefault();
    const header = getHeader();
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("age", payload.age);
    formData.append("gender", payload.gender);
    formData.append("contact", payload.contact);
    formData.append("address", payload.address);
    formData.append("note", payload.note);
    formData.append("cnic_number", payload.cnic_number);
    formData.append("photocopy", payload.photocopy);
    formData.append(
      "attending_physician_name",
      payload.attending_physician_name
    );
    formData.append("attendantName", payload.attendantName);
    formData.append("attendant_relation_to_patient", payload.attendantRelation);
    formData.append("patient_condition", payload.patient_condition);
    formData.append("patient_status", payload.patient_status);
    formData.append("father_status", payload.father_status);
    formData.append("father_name", payload.father_name);
    formData.append("father_profession", payload.father_profession);
    formData.append("father_cnic_number", payload.father_cnic_number);
    formData.append("income", payload.income);
    formData.append("eligibility", payload.eligibility);
    formData.append("interview_conducted_by", payload.interview_conducted_by);
    formData.append("narrative", payload.narrative);
    formData.append("symptoms_time", payload.symptoms_time);
    formData.append("date", payload.date);

    console.log("formData: ", addPatient);

    try {
      setLoading(true);
      const { data } = await API.post("/patients", formData, header);
      if (data?.success == true) {
        toast.success(data?.message);
        setPayload({
          name: "",
          age: "",
          gender: "",
          contact: "",
          address: "",
          note: "",
          cnic_number: "",
          father_cnic_number: "",
          photocopy: "",
          attending_physician_name: "",
          attendantName: "",
          attendantRelation: "",
          patient_condition: "",
          patient_status: "",
          father_name: "",
          father_status: "",
          father_profession: "",
          income: null,
          eligibility: "",
          interview_conducted_by: "",
          narrative: "",
          symptoms_time: "",
          date: "",
        });
        router.push("/all-patients");
      } else if (data?.success == false) {
        toast.error("Failed to add patient, please try again");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <form onSubmit={addPatient}>
        <div className="row">
          <div className="col-xl-4">
            <div className="form-group row widget-3">
              <div className="col-lg-12">
                <FileInput
                  required
                  label="Patient picture"
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
          <div className="col-xl-4">
            <TextInput
              required
              type="date"
              name="date"
              placeholder="Select Date"
              value={payload.date}
              onChange={handleChange}
            />

            <div className="form-group">
              <select
                className="form-control form-select"
                placeholder="Gender"
                name="gender"
                value={payload.gender}
                onChange={handleChange}
              >
                <option defaultChecked>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <TextInput
              required
              name="cnic_number"
              placeholder="Patient CNIC"
              value={payload.cnic_number}
              onChange={handleChange}
            />
            <TextInput
              required
              name="address"
              placeholder="Address"
              value={payload.address}
              onChange={handleChange}
            />
            <TextInput
              required
              name="father_name"
              type="text"
              min={1}
              placeholder="Father / Guardian Name."
              value={payload.father_name}
              onChange={handleChange}
            />
            <TextInput
              required
              name="father_profession"
              placeholder="Father / Guardian profession"
              value={payload.father_profession}
              onChange={handleChange}
            />
            <TextInput
              type="text"
              name="income"
              placeholder="Income"
              value={payload.income}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4">
            <TextInput
              required
              name="name"
              placeholder="Patient name"
              value={payload.name}
              onChange={handleChange}
            />
            <TextInput
              required
              type="text"
              name="age"
              placeholder="Age"
              value={payload.age}
              onChange={handleChange}
            />
            <TextInput
              required
              name="patient_condition"
              placeholder="Patient condition"
              value={payload.patient_condition}
              onChange={handleChange}
            />
            <TextInput
              required
              name="symptoms_time"
              placeholder="Time of symptoms on set"
              value={payload.symptoms_time}
              onChange={handleChange}
            />
            {/* <TextInput
              required
              name="father_status"
              placeholder="Father / Guardian status"
              value={payload.father_status}
              onChange={handleChange}
            /> */}
            <div className="form-group">
              <select
                className="form-control form-select"
                name="father_status"
                value={payload.father_status}
                onChange={handleChange}
              >
                <option defaultChecked>Select Father Status</option>
                <option value="alive">Alive</option>
                <option value="deceased">Deceased</option>
              </select>
            </div>
            <TextInput
              required
              type="text"
              name="father_cnic_number"
              placeholder="Father / Guardian CNIC"
              value={payload.father_cnic_number}
              onChange={handleChange}
            />

            <TextInput
              required
              name="contact"
              type="number"
              min={1}
              placeholder="Contact no."
              value={payload.contact}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4">
            <div className="d-flex justify-content-between pt-3 mb-4 gap-4">
              <RadioInput
                name="eligibility"
                label="Eligible"
                value="eligible"
                onChange={handleChange}
              />
              <RadioInput
                name="eligibility"
                label="Ineligible"
                value="ineligible"
                onChange={handleChange}
              />
              <RadioInput
                name="eligibility"
                label="Suspicious"
                value="suspicious"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-xl-4">
            <TextInput
              required
              name="attendantName"
              placeholder="Attendant name"
              value={payload.attendantName}
              onChange={handleChange}
            />

            <TextInput
              required
              name="attending_physician_name"
              placeholder="Attending physician name"
              value={payload.attending_physician_name}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4">
            <TextInput
              required
              name="attendantRelation"
              placeholder="Attendant relation to patient"
              value={payload.attendantRelation}
              onChange={handleChange}
            />
            <div className="form-group">
              <select
                className="form-control form-select"
                name="patient_status"
                value={payload.patient_status}
                onChange={handleChange}
              >
                <option defaultChecked>Select Patient Status</option>
                <option value="alive">Alive</option>
                <option value="deceased">Deceased</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4"></div>
          <div className="col-xl-8">
            <TextAreaInput
              required
              name="narrative"
              placeholder="Narrative"
              value={payload.narrative}
              onChange={handleChange}
            />

            <div className="form-group text-right mt-5">
              <button type="submit" className="btn btn-primary float-end">
                {loading ? <ButtonLoader /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPatient;
