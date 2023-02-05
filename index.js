const employee = {name: "Brent", address: "earth"}


//this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    }
}

// this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

//this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!


function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee}
    delete newObject[key]
    return newObject
}



//this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = employee
    delete newObject[key]
    return newObject
}