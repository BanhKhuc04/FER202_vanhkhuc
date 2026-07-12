import React, { useState, useEffect } from "react";
import { updateEmployee } from "../api";

const RELATIONSHIP_OPTIONS = [
  "Wife",
  "Son",
  "Daughter",
  "Father",
  "Mother",
  "Father in law",
  "Mother in law",
];

function DependentsPanel({ employee, onUpdateEmployee }) {
  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [relationship, setRelationship] = useState("");
  const [errors, setErrors] = useState([]);

  // Reset the form whenever the selected employee changes
  useEffect(() => {
    setFullname("");
    setBirthdate("");
    setRelationship("");
    setErrors([]);
  }, [employee]);

  if (!employee) {
    return (
      <div className="panel">
        <h2>Dependents List</h2>
        <p className="muted">Select "View Dependents" for an employee</p>
      </div>
    );
  }

  const dependents = employee.dependents || [];

  const validate = () => {
    const errs = [];
    if (!fullname.trim()) errs.push("Fullname is required");
    if (!birthdate) {
      errs.push("Birthdate is required");
    } else if (new Date(birthdate) >= new Date(new Date().toDateString())) {
      errs.push("Birthdate must be before today");
    }
    if (!relationship) errs.push("Please choose a relationship");
    return errs;
  };

  const handleAdd = async () => {
    const errs = validate();
    setErrors(errs);
    if (errs.length > 0) return;

    // database.json thật dùng field "fullName" / "birthDate" (viết hoa D),
    // và dependent không có "id" -> không thêm id vào đây
    const newDependent = {
      fullName: fullname.trim(),
      birthDate: birthdate,
      relationship,
    };

    const updatedEmployee = {
      ...employee,
      dependents: [...dependents, newDependent],
    };

    try {
      await updateEmployee(employee.id, updatedEmployee);
      onUpdateEmployee(updatedEmployee);
      setFullname("");
      setBirthdate("");
      setRelationship("");
      setErrors([]);
    } catch (err) {
      setErrors(["Failed to save dependent. Please try again."]);
    }
  };

  return (
    <div className="panel">
      <h2>Dependents List</h2>

      {dependents.length === 0 ? (
        <p className="no-dependents">No dependents</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Birthdate</th>
              <th>Relationship</th>
            </tr>
          </thead>
          <tbody>
            {dependents.map((d, i) => (
              // dependent không có id riêng -> dùng index làm key (chấp nhận được vì list này không bị sắp xếp lại)
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.fullName}</td>
                <td>{d.birthDate}</td>
                <td>{d.relationship}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Add new dependents</h3>

      {errors.length > 0 && (
        <div className="error-box">
          <strong>Errors:</strong>
          <ul>
            {errors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <label>Fullname</label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />

      <label>Birthdate</label>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />

      <label>Relationship</label>
      <select
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
      >
        <option value="">--- Type of relationship ---</option>
        {RELATIONSHIP_OPTIONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <button className="btn-add" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default DependentsPanel;