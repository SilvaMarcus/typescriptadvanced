interface Person {
     name:string,
     age:number,
     car?:string    // not every person have a car, so we use ?to make the value optional.
}; 


interface Student extends Person /* , Person2, Person3, Person4 */{
     course: string,
     notes: number,
};


let person: Student;

// now we doesn't need to declared car, because we tell that is optional using car?:string 
// is the same that.... car: string | undefined; 
person = {
     name:'Marcus',
     age: 25,
     course:'TI',
     notes: 10,
     
}