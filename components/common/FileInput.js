"use client";

import getBase64 from "@/utils/getBase64";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FileInput = ({ label, onChange, file }) => {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    file && setPreview(file);
  }, [file]);
  return (
    <>
      <p style={{ color: "black", fontSize: 16, textAlign: "center" }}>
        {label}
      </p>
      <div className="form-input">
        {!preview ? (
          <label className="labeltest" htmlFor="file-ip-1">
            <span>Click to upload </span>
          </label>
        ) : null}
        <input
          type="file"
          id="file-ip-1"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            getBase64(file)
              .then((data) => setPreview(data))
              .catch((err) => console.log(err));
            onChange(file);
          }}
        />
        {preview && (
          <div className="preview" style={{ zIndex: 99 }}>
            <Image
              id="file-ip-1-preview"
              src={preview}
              alt="img"
              width={200}
              height={160}
              style={{
                display: preview ? "block" : "none",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FileInput;
