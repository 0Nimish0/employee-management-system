// Employee Data

let employees = [
    {
        id: 1,
        name: "nimish",
        email: "nimishemployee1@gmail.com",
        department: "IT",
        designation: "Engineer",
        status: "Active"
    },
    {
        id: 2,
        name: "minish",
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


// Dashboard

let totalEmployees = document.getElementById("totalEmployees");
let totalDepartments = document.getElementById("totalDepartments");
let activeEmployees = document.getElementById("activeEmployees");

function updateDashboard() {
    totalEmployees.innerText = employees.length;

    let activeEmployeeList = employees.filter(employee => {
        return employee.status === "Active";
    });

    activeEmployees.innerText = activeEmployeeList.length;

    let departments = new Set(
        employees.map(employee => employee.department)
    );

    totalDepartments.innerText = departments.size;
}


// Edit Employee Elements

let editModal = document.getElementById("editModal");
let closeEditModal = document.getElementById("closeEditModal");
let cancelEdit = document.getElementById("cancelEdit");

let editName = document.getElementById("editName");
let editEmail = document.getElementById("editEmail");
let editDepartment = document.getElementById("editDepartment");
let editDesignation = document.getElementById("editDesignation");
let editStatus = document.getElementById("editStatus");

let editEmployeeForm = document.getElementById("editEmployeeForm");


// Add Employee Elements

let addEmployeeBtn = document.getElementById("addEmployeeBtn");
let addEmployeeModal = document.getElementById("addEmployeeModal");

let cancelAddEmployee = document.getElementById("cancelAddEmployee");

let addName = document.getElementById("addName");
let addEmail = document.getElementById("addEmail");
let addDepartment = document.getElementById("addDepartment");
let addDesignation = document.getElementById("addDesignation");
let addStatus = document.getElementById("addStatus");

let addEmployeeForm = document.getElementById("addEmployeeForm");


// Search

let searchInput = document.getElementById("searchInput");
let departmentFilter = document.getElementById("departmentFilter");

function filterEmployees() {
    let searchValue = searchInput.value.toLowerCase();
    let selectedDepartment = departmentFilter.value;

    let filteredEmployees = employees.filter(employee => {
        let matchesSearch = employee.name
            .toLowerCase()
            .includes(searchValue);

        let matchesDepartment =
            selectedDepartment === "" ||
            employee.department === selectedDepartment;

        return matchesSearch && matchesDepartment;
    });

    displayEmployees(filteredEmployees);
}

searchInput.addEventListener("input", () => {
    filterEmployees();
});

departmentFilter.addEventListener("change", () => {
    filterEmployees();
});


// Table

let tableBody = document.getElementById("employeeTableBody");


// Selected Employee

let selectedEmployee = null;


// Display Employees

function displayEmployees(employeeList = employees) {
    tableBody.innerHTML = "";

    employeeList.forEach(element => {

        let row = document.createElement("tr");

        let tableDataName = document.createElement("td");
        let tableDataEmail = document.createElement("td");
        let tableDataDepartment = document.createElement("td");
        let tableDataDesignation = document.createElement("td");
        let tableDataStatus = document.createElement("td");
        let tableDataAction = document.createElement("td");

        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");


        tableBody.append(row);

        row.append(tableDataName);
        tableDataName.innerHTML = element.name;

        row.append(tableDataEmail);
        tableDataEmail.innerHTML = element.email;

        row.append(tableDataDepartment);
        tableDataDepartment.innerHTML = element.department;

        row.append(tableDataDesignation);
        tableDataDesignation.innerHTML = element.designation;

        row.append(tableDataStatus);
        tableDataStatus.innerHTML = element.status;

        row.append(tableDataAction);


        // Edit Button

        editButton.innerText = "Edit";
        tableDataAction.append(editButton);

        editButton.addEventListener("click", () => {

            let editEmployee = employees.find(
                employee => employee.id === element.id
            );

            selectedEmployee = editEmployee;

            editName.value = selectedEmployee.name;
            editEmail.value = selectedEmployee.email;
            editDepartment.value = selectedEmployee.department;
            editDesignation.value = selectedEmployee.designation;
            editStatus.value = selectedEmployee.status;

            editModal.style.display = "flex";
        });


        // Delete Button

        deleteButton.innerText = "Delete";
        tableDataAction.append(deleteButton);

        deleteButton.addEventListener("click", () => {

            employees = employees.filter(
                employee => employee.id !== element.id
            );

            console.log(`Employee ${element.id} deleted`);

            displayEmployees();
            updateDashboard();
        });

    });
}


// Edit Employee

editEmployeeForm.addEventListener("submit", (event) => {

    event.preventDefault();

    selectedEmployee.name = editName.value;
    selectedEmployee.email = editEmail.value;
    selectedEmployee.department = editDepartment.value;
    selectedEmployee.designation = editDesignation.value;
    selectedEmployee.status = editStatus.value;

    displayEmployees();
    updateDashboard();

    editModal.style.display = "none";
});


cancelEdit.addEventListener("click", () => {

    editModal.style.display = "none";

});


// Add Employee

addEmployeeBtn.addEventListener("click", () => {

    addEmployeeModal.style.display = "flex";

});


cancelAddEmployee.addEventListener("click", () => {

    addEmployeeModal.style.display = "none";

});


addEmployeeForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let newEmployee = {
        id: employees.length + 1,
        name: addName.value,
        email: addEmail.value,
        department: addDepartment.value,
        designation: addDesignation.value,
        status: addStatus.value
    };

    employees.push(newEmployee);

    displayEmployees();
    updateDashboard();

    addEmployeeForm.reset();

    addEmployeeModal.style.display = "none";

});


// Initial Display

displayEmployees();
updateDashboard();