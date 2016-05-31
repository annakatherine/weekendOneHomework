console.log("anna you're a genius");
var allEmployees = [];
var allSalaries = 0;
//function to add 1. input from form into variables 2. add variables into object


var createEmployee = function(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var employeeID = document.getElementById('employeeID').value;
  var jobTitle = document.getElementById('jobTitle').value;
  var salary = Number(document.getElementById('salary').value);

//here is the employee object
    var employee = {
      'firstName': firstName,
      'lastName': lastName,
      'employeeID': employeeID,
      'jobTitle': jobTitle,
      'salary': salary
};
allEmployees.push( employee ); //adds employee to allEmployee array
var clearForm = function() {
  document.getElementById('firstName').value="";
  document.getElementById('lastName').value="";
  document.getElementById('employeeID').value="";
  document.getElementById('jobTitle').value="";
  document.getElementById('salary').value="";
};
clearForm();
//converts salary strings into numeros
//returns salary total after new employee is added
salary = parseInt(salary);

allSalaries = (allSalaries + employee.salary);
console.log('allSalaries = ' + allSalaries);
var monthlySal = allSalaries/12;
console.log('monthly sal = ' + monthlySal);
listofEmployees();
alert('Monthly Cost of all Employee Salaries is ' + monthlySal);
};

var listofEmployees = function(){
  console.log('in listAllEmployees');
  document.getElementById('listofEmployees').innerHTML = '';
  for(var i = 0; i<allEmployees.length; i++){
    var outputText = '<p>' + 'First Name: ' + allEmployees[i].firstName + ' ' + 'Last Name: ' + allEmployees[i].lastName + ' ' + 'Employee ID: ' + allEmployees[i].employeeID + ' ' + 'Job Title: ' + allEmployees[i].jobTitle + ' ' + 'Salary: ' + allEmployees[i].salary + '</p>';
     document.getElementById('listofEmployees').innerHTML += '<p>' + outputText + '</p>';
  }
};
//end of basic mode!//

//deletes employee
// var deleteEmployee = function() {
//   var firedEmployee = document.getElementById('deletedEmployeeID').value;
//   alert(firedEmployee);
//   firedEmployee.removeChild(firedEmployee);
//   // for (var i = 0; i < employeeID.length; i++) {
//   //   array[i]
// };
//     if( firedEmployee === document.getElementbyId('employeeID').value ){
//           alert('success');
//           }
//   };
//
//
//    deleteEmployee();
    listofEmployees();


  //clears the deleted employee form
  // var clearDeletedEmployeeForm = function(){
  //   document.getElementById('deletedEmployeeID');
  // };
  //
  // clearDeletedEmployeeForm();
  //


//recalculates the monthly salary
  // var newMonthlySalary = function() {
  //   monthlySal = monthlySal - deletedEmployee[i].salary;
  // };
  //   newMonthlySalary();
  //   alert('new monthly salary is ' + newMonthlySalary);


// var totalMonthlySalary = function() {
// // calculates all monthly salaries
//    allSalaries = allSalaries + employee.salary / 12;
// };
// console.log(totalMonthlySalary());
// };
