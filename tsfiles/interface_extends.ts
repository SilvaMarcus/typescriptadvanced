interface Person {
     name:string,
     age:number   
};

// with extends, Student inherits the properties of Person
// you can add more separating with ','
interface Student extends Person /* , Person2, Person3, Person4 */{
     course: string,
     notes: number,
};

let student: Student;

// other example using type

 type CarProperties = {
     price: number,
     size: number
 };
// NameofType type and & 
 type Car =  CarProperties &{
     brand:string,
     model:string
 }; // we can use here too like ... & CarProperties

let newCar: Car;




