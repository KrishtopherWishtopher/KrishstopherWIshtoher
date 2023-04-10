var person = ["Mark", "Victor", "Strong"];
var salaries = [63000, 89000, 42500];

function addSalary() 
{
    let newEmployee = document.getElementById("newEmployee").value;
    let newSalary = document.getElementById("newSalary").value;
    if(newEmployee == "" || newSalary == "")
    {
        alert("You must input a value in each field");
    }
    if(newEmployee != "" && newSalary != "")
    {
        person.push(newEmployee);
        salaries.push(newSalary);
        alert("You have added a new Employee and their salary!");
    }
    

}

function displayResults() 
{
    var highestSalary = 0; 
    var averageSalary = 0;
    for (var i = 0; i < salaries.length; i++) 
    {
        averageSalary += salaries[i];
        if (salaries[i] > highestSalary) 
        {
            highestSalary = salaries[i];
        }
    }
    if (salaries.length != 0) 
    {
        averageSalary = averageSalary / salaries.length;
    } 


    let results = document.getElementById("results");
    results.innerHTML = "<p> The highest salary: " + highestSalary + "</p>";
    results.innerHTML +=  "<p> The average of all salaries: " + averageSalary + "</p>";

}

function displaySalary() 
{
    let employeeTable = document.getElementById("result_table");
    employeeTable.innerHTML = "<thead><tr><th>Employee</th><th>Salary</th></tr></thead>";
    for (var i = 0; i < person.length; i++) 
    {
        employeeTable.innerHTML += "<tbody><tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr></tbody>";
    }

}

function employeeDropDown()
{
    var employees = document.getElementById("employees");
    employees.innerHTML = "";
    for (var i = 0; i < person.length; i++) 
    {
        employees.innerHTML += "<option>" + person[i] + "</option>";
    }
}


