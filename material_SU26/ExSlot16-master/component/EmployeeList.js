import React, { useState } from "react";

function formatVND(amount) {
  return new Intl.NumberFormat("vi-VN").format(Math.round(amount)) + " VND";
}

function fullName(emp) {
  return `${emp.empName.firstName} ${emp.empName.lastName}`;
}

function EmployeeList({ employees, projects, workons, onViewDependents }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // project.id là string, workon.proId là number -> ép kiểu khi so sánh
  const projectName = (proId) => {
    const p = projects.find((pr) => Number(pr.id) === proId);
    return p ? p.proName : "";
  };

  // workon.empId là number, employee.id là string -> ép kiểu khi so sánh
  const employeeWorkons = (employeeId) =>
    workons.filter((w) => w.empId === Number(employeeId));

  const calcSalary = (empSalary, workHours) => {
    const hourly = empSalary / 176;
    return hourly * workHours;
  };

  return (
    <div className="panel">
      <h2>Employee List</h2>
      {employees.length === 0 && <p className="muted">Select a department to view employees</p>}
      <div className="accordion">
        {employees.map((emp, index) => {
          const isOpen = openId === emp.id;
          const empWorkons = employeeWorkons(emp.id);
          const totalSalary = empWorkons.reduce(
            (sum, w) => sum + calcSalary(emp.empSalary, w.workHours),
            0
          );

          return (
            <div className="accordion-item" key={emp.id}>
              <div
                className={"accordion-header" + (isOpen ? " open" : "")}
                onClick={() => toggle(emp.id)}
              >
                <span>
                  #{index + 1} - {fullName(emp)}
                  {emp.supervisorId === null ? " - Manager" : ""}
                </span>
                <span className="chevron">{isOpen ? "\u25B2" : "\u25BC"}</span>
              </div>

              {isOpen && (
                <div className="accordion-body">
                  <ul className="emp-details">
                    <li>EmployeeId: {emp.id}</li>
                    <li>Gender: {emp.empGender}</li>
                    <li>BirthDate: {emp.empBirthdate}</li>
                  </ul>

                  <button
                    className="btn-view-dependents"
                    onClick={() => onViewDependents(emp)}
                  >
                    View Dependents
                  </button>

                  <p className="subheading">Work on projects</p>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>WorkId</th>
                        <th>Project name</th>
                        <th>Work hours</th>
                        <th>Salary (VND)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {empWorkons.map((w) => (
                        <tr key={w.id}>
                          <td>{w.id}</td>
                          <td>{projectName(w.proId)}</td>
                          <td>{w.workHours}</td>
                          <td>{formatVND(calcSalary(emp.empSalary, w.workHours))}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="total-salary">
                    Projects Salary: {formatVND(totalSalary)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmployeeList;