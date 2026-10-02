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

let departments = ["IT", "HR", "Marketing", "Finance"];

let departmentList = document.getElementById("departmentList");

departments.forEach(department => {

    let departmentEmployees = employees.filter(employee => {
        return employee.department === department;
    });

    let departmentCard = document.createElement("div");

    departmentCard.innerHTML = `
        <h2>${department}</h2>
        <p>${departmentEmployees.length} Employees</p>
    `;

    departmentList.append(departmentCard);

});