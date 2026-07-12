import React, { useEffect, useState } from "react";
import DepartmentList from "./component/DepartmentList";
import EmployeeList from "./component/EmployeeList";
import DependentsPanel from "./component/DependentsPanel";
import { getDepartments, getEmployees, getProjects, getWorkons } from "./api";
import "./App.css";

function App() {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [workons, setWorkons] = useState([]);

  const [selectedDepId, setSelectedDepId] = useState(null); // sẽ lưu dạng string, giống department.id
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    Promise.all([getDepartments(), getEmployees(), getProjects(), getWorkons()]).then(
      ([deps, emps, projs, wons]) => {
        setDepartments(deps);
        setEmployees(emps);
        setProjects(projs);
        setWorkons(wons);
      }
    );
  }, []);

  const handleViewDepartment = (depId) => {
    setSelectedDepId(depId);
    setSelectedEmployee(null); // reset panel dependents khi đổi phòng ban
  };

  const handleViewDependents = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === updatedEmployee.id ? updatedEmployee : e))
    );
    setSelectedEmployee(updatedEmployee);
  };

  // department.id là string ("1"), employee.depId là number (1) -> phải ép kiểu khi so sánh
  const filteredEmployees = employees.filter(
    (e) => selectedDepId !== null && e.depId === Number(selectedDepId)
  );

  return (
    <div className="app">
      <header className="app-header">COMPANY MANAGEMENT</header>
      <div className="app-body">
        <DepartmentList
          departments={departments}
          employees={employees}
          selectedDepId={selectedDepId}
          onView={handleViewDepartment}
        />
        <EmployeeList
          employees={filteredEmployees}
          projects={projects}
          workons={workons}
          onViewDependents={handleViewDependents}
        />
        <DependentsPanel
          employee={selectedEmployee}
          onUpdateEmployee={handleUpdateEmployee}
        />
      </div>
    </div>
  );
}

export default App;