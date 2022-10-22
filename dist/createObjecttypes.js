"use strict";
;
;
let person;
// now we doesn't need to declared car, because we tell that is optional using car?:string 
// is the same that.... car: string | undefined; 
person = {
    name: 'Marcus',
    age: 25,
    course: 'TI',
    notes: 10,
};
console.log(person);
