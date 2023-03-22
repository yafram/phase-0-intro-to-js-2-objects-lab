// Write your solution in this file!
const employee = {
    name: "Mary",
    streetAddress: {
        line1: "29 Anywhere Ln",
        line2: "Apt 2b",
    },
    city: "Atlanta",
    state: "GA",
    zipCode: "30001",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
   let newEmployee = { ...employee };
   delete newEmployee.name;
   return newEmployee = newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) { 
        delete employee.name;
        return employee;                
     
}