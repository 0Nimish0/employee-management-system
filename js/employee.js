let employees = [
    {
        id: 1,
        name: "Nimish",
        email: "nimishemployee1@gmail.com",
        department: "IT",
        designation: "Engineer",
        status: "Active"
    },
    {
        id: 2,
        name: "Minish",
        email: "minishemployee2@gmail.com",
        department: "HR",
        designation: "HR",
        status: "Active"
    },
    {
        id: 3,
        name: "Timi",
        email: "timiemployee3@gmail.com",
        department: "IT",
        designation: "Engineer",
        status: "Active"
    }
];

let employeeSelect = document.getElementById("employeeSelect");
let employeeProfile = document.getElementById("employeeProfile");


employeeSelect.addEventListener("change", () => {

    let selectedId = Number(employeeSelect.value);

    let selectedEmployee = employees.find(employee => {
        return employee.id === selectedId;
    });

    employeeProfile.innerHTML = `
    <h2>${selectedEmployee.name}</h2>
    <p>Email: ${selectedEmployee.email}</p>
    <p>Department: ${selectedEmployee.department}</p>
    <p>Designation: ${selectedEmployee.designation}</p>
    <p>Status: ${selectedEmployee.status}</p>
`;

});