import React from "react";

function DepartmentList({ departments, employees, selectedDepId, onView }) {
  const managerName = (managerId) => {
    // employee.id là string ("1"), managerId là number (1) -> phải ép kiểu khi so sánh
    const manager = employees.find((e) => Number(e.id) === managerId);
    if (!manager) return "";
    return `${manager.empName.firstName} ${manager.empName.lastName}`;
  };

  return (
    <div className="panel">
      <h2>Department List</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>DepName</th>
            <th>Manager</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dep) => (
            <tr key={dep.id}>
              <td>{dep.depName}</td>
              <td>{managerName(dep.managerId)}</td>
              <td>
                <button
                  className={
                    "btn-view" + (selectedDepId === dep.id ? " active" : "")
                  }
                  onClick={() => onView(dep.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentList;