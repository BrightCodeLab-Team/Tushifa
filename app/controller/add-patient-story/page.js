"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import API from "@/utils/api";

const AddPatientStory = () => {
  const [form, setForm] = useState({
    name: "",
    diagnosis: "",
    location: "",
    age: "",
    story: "",
    fullStory: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });
      if (imageFile) formData.append("image", imageFile);

      const absoluteUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/api/patient-stories`
          : "/api/patient-stories";

      await API.post(absoluteUrl, formData);

      router.push("/controller/dashboard");
    } catch (err) {
      console.error("Add story error:", err?.response?.data || err?.message || err);
      alert(err?.response?.data?.message || "Failed to add patient story");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Add Patient Story</h2>
      <form onSubmit={handleSubmit} className="form-card">
        <input
          className="form-input"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          name="diagnosis"
          placeholder="Diagnosis"
          value={form.diagnosis}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />
        <textarea
          className="form-textarea"
          name="story"
          placeholder="Short Story / Quote"
          value={form.story}
          onChange={handleChange}
        />
        <textarea
          className="form-textarea"
          name="fullStory"
          placeholder="Full Story"
          value={form.fullStory}
          onChange={handleChange}
          required
        />

        {/* Image Upload with preview */}
        <label className="upload-box">
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
          {preview ? (
            <Image src={preview} alt="Preview" className="preview-img" width={400} height={200} />
          ) : (
            <span>Click to upload image</span>
          )}
        </label>

        <button type="submit" className="form-btn" disabled={loading}>
          {loading ? "Adding..." : "Add Story"}
        </button>
      </form>

      <style jsx>{`
        .form-wrapper {
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          color: #333;
        }

        .form-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #e12454;
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .upload-box {
          border: 2px dashed #bbb;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
          color: #666;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .upload-box:hover {
          border-color: #e12454;
          color: #e12454;
        }

        .preview-img {
          max-width: 100%;
          max-height: 200px;
          border-radius: 0.5rem;
        }

        .form-btn {
          background: #e12454;
          color: #fff;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 2rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .form-btn:hover:not(:disabled) {
          background: #c81e3a;
        }

        .form-btn:disabled {
          background: #aaa;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default AddPatientStory;
