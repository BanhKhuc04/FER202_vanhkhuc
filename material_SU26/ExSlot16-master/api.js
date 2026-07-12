const BASE_URL = "http://localhost:9999";

export async function getDepartments() {
  const res = await fetch(`${BASE_URL}/departments`);
  return res.json();
}

export async function getEmployees() {
  const res = await fetch(`${BASE_URL}/employees`);
  return res.json();
}

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/projects`);
  return res.json();
}

export async function getWorkons() {
  const res = await fetch(`${BASE_URL}/workons`);
  return res.json();
}

export async function updateEmployee(id, employee) {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
}