import faker from 'faker'


let tests = '';

for (let index = 0; index < 10; index++) {
    const element = faker.company.companyName();

    tests += `<ol><li>${element}</li></ol>`
    
}

console.log(tests);
document.querySelector('#test-app').innerHTML = tests;
