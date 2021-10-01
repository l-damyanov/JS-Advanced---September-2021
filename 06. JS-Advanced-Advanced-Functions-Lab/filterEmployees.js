function solve(data, criteria) {
    let employees = JSON.parse(data);
    let [keyCriteria, valueCriteria] = criteria.split('-');
    let counter = 0;
    for (let employee of employees) {
        if (employee[keyCriteria] == valueCriteria) {
            console.log(`${counter}. ${employee['first_name']} ${employee['last_name']} - ${employee['email']}`);
            counter++;
        }
    }
}

solve(
`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);