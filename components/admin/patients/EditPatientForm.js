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
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditPatientForm = ({ data, callback }) => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    patient_code: "",
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    cnic_number: "",
    photocopy: "",
    attending_physician_name: "",
    attendantName: "",
    attendantRelation: "",
    note: "",
    patient_condition: "",
    father_status: "",
    father_profession: "",
    income: null,
    eligibility: "",
    interview_conducted_by: "",
    narrative: "",
    symptoms_time: "",
    date: "",
  });

  useEffect(() => {
    setImage(data?.photocopy);
    console.log(data);
    setPayload({
      patient_code: data?.patient_code,
      name: data?.name,
      age: data?.age,
      gender: data?.gender,
      contact: data?.contact,
      address: data?.address,
      cnic_number: data?.cnic,
      photocopy: "",
      attending_physician_name: data?.attending_physician_name,
      attendantName: data?.attendant_details?.name,
      attendantRelation: data?.attendant_details?.relation_to_patient,
      note: data?.note,
      patient_condition: data?.patient_condition,
      father_status: data?.father_status,
      father_profession: data?.father_profession,
      income: data?.income,
      eligibility: data?.eligibility,
      interview_conducted_by: data?.interview_conducted_by,
      narrative: data?.narrative,
      symptoms_time: data?.symptoms_time,
      date: data?.date,
    });
    console.log(data);
  }, [data]);

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  //   add patient handler
  const handleUpdate = async (e) => {
    e.preventDefault();
    const header = getHeader();

    const formData = new FormData();
    formData.append("patient_code", payload.patient_code);
    formData.append("name", payload.name);
    formData.append("age", payload.age);
    formData.append("gender", payload.gender);
    formData.append("contact", payload.contact);
    formData.append("address", payload.address);
    formData.append("cnic_number", payload.cnic_number);
    formData.append("photocopy", payload.photocopy);
    formData.append(
      "attending_physician_name",
      payload.attending_physician_name
    );
    formData.append("attendantName", payload.attendantName);
    formData.append("attendant_relation_to_patient", payload.attendantRelation);
    formData.append("note", payload.note);
    formData.append("patient_condition", payload.patient_condition);
    formData.append("father_status", payload.father_status);
    formData.append("father_profession", payload.father_profession);
    formData.append("income", payload.income);
    formData.append("eligibility", payload.eligibility);
    formData.append("interview_conducted_by", payload.interview_conducted_by);
    formData.append("narrative", payload.narrative);
    formData.append("symptoms_time", payload.symptoms_time);
    formData.append("date", payload.date);

    try {
      setLoading(true);
      const response = await API.put(
        `/patients/${data?._id}`,
        formData,
        header
      );
      if (response?.data?.success == true) {
        toast.success(response?.data?.message);
        callback();
      } else if (response?.data?.success == false) {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="" style={{ paddingLeft: 16 }} onSubmit={handleUpdate}>
        <div className="row">
          <div className="col-xl-4" style={{ paddingRight: 30 }}>
            <div className="form-group row widget-3">
              <FileInput
                required
                label="Patient picture"
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
          <div className="col-xl-4">
            <TextInput
              required
              name="patient_code"
              placeholder="Patient code"
              value={payload.patient_code}
              onChange={handleChange}
            />
            <TextInput
              required
              name="name"
              placeholder="Patient name"
              value={payload.name}
              onChange={handleChange}
            />
            <TextInput
              required
              type="number"
              min={1}
              name="cnic_number"
              placeholder="Father / Guardian CNIC"
              value={payload.cnic_number}
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
            <TextInput
              required
              name="attendantName"
              placeholder="Attendant name"
              value={payload.attendantName}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4">
            <TextInput
              required
              type="number"
              min={1}
              name="age"
              placeholder="Age"
              value={payload.age}
              onChange={handleChange}
            />
            <TextInput
              required
              name="attending_physician_name"
              placeholder="Attending physician name"
              value={payload.attending_physician_name}
              onChange={handleChange}
            />
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
              name="patient_condition"
              placeholder="Patient condition"
              value={payload.patient_condition}
              onChange={handleChange}
            />
            <TextInput
              required
              name="father_status"
              placeholder="Father status"
              value={payload.father_status}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <div className="d-flex flex-column justify-content-between pt-3 mb-4">
              <RadioInput
                name="eligibility"
                label="Eligible"
                value="eligible"
                onChange={handleChange}
                className="mb-3"
                checked={payload.eligibility === "eligible"}
              />
              <RadioInput
                name="eligibility"
                label="Ineligible"
                value="ineligible"
                onChange={handleChange}
                className="mb-3"
                checked={payload.eligibility === "ineligible"}
              />
              <RadioInput
                name="eligibility"
                label="Suspicious"
                value="suspicious"
                onChange={handleChange}
                className="mb-3"
                checked={payload.eligibility === "suspicious"}
              />
            </div>
          </div>
          <div className="col-xl-4">
            <TextInput
              required
              name="father_profession"
              placeholder="Father / Guardian profession"
              value={payload.father_profession}
              onChange={handleChange}
            />
            <TextInput
              required
              name="interview_conducted_by"
              placeholder="Interview conducted by"
              value={payload.interview_conducted_by}
              onChange={handleChange}
            />
            <TextInput
              required
              type="date"
              min={1}
              name="date"
              placeholder="Date"
              value={payload.date}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-4">
            <TextInput
              name="income"
              placeholder="Income"
              type="number"
              min={1}
              value={payload.income}
              onChange={handleChange}
            />
            <TextInput
              required
              name="narrative"
              placeholder="Narrative"
              value={payload.narrative}
              onChange={handleChange}
            />
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
          <div className="col-xl-4"></div>
          <div className="col-xl-8">
            <TextAreaInput
              required
              name="address"
              placeholder="Address"
              value={payload.address}
              onChange={handleChange}
              rows={4}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4"></div>
          <div className="col-xl-8">
            <TextAreaInput
              required
              name="note"
              placeholder="Note"
              value={payload.note}
              onChange={handleChange}
              rows={4}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            {loading ? <ButtonLoader /> : "Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPatientForm;
