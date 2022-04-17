// Write your solution in this file!

const employee = {name: "denisha"}

    function updateEmployeeWithKeyAndValue(employee,key,value){
        const employeeInfo = {...employee}
        employeeInfo[key] = value
        return employeeInfo

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    const employeeUpdate = {key,value}
    employee [key] = value
 return employee
}

function deleteFromEmployeeByKey(employee, key){
    const employeeDelete = {...employee}
    delete employeeDelete[key] // if key is in brackets its referring to a variable, if a dot is in front its referring to a property
    return employeeDelete
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    
    delete employee[key]
    return employee
}

