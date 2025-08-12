"use client";

const RadioInput = ({ label, onChange, name, className, ...rest }) => {
  return (
    <>
      <div class="form-check">
        <input
          className={`form-check-input ${className}`}
          type="radio"
          name={name}
          id="flexRadioDefault1"
          onChange={onChange}
          {...rest}
        />
        <label className="form-check-label" for="flexRadioDefault1">
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioInput;
