interface Employee {
    id: number;
    name: string;
    salary: number;
}
let employees: Employee[] = [];
function createEmployee(employee: Employee) {
    employees.push(employee);
    console.log("Employee added");
}
function getEmployees() {
    console.log(employees);
}
function updateEmployee(id: number, name: string, salary: number) {
    let employee = employees.find(e => e.id == id);
    if (employee) {
        employee.name = name;
        employee.salary = salary;
        console.log("Employee updated");
    } else {
        console.log("Employee not found");
    }
}
function deleteEmployee(id: number) {
    employees = employees.filter(e => e.id != id);
    console.log("Employee deleted");
}
createEmployee({
    id: 1,
    name: "Rahul",
    salary: 30000
});
createEmployee({
    id: 2,
    name: "Arun",
    salary: 35000
});
getEmployees();
updateEmployee(1, "Rahul Kumar", 40000);
getEmployees();
deleteEmployee(2);

getEmployees();
