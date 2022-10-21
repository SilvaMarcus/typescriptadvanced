

interface Person2<T = Student2> { // se nao for especificado o T em proffisao, ele sera identificado como Student.
     name: string,
     age: number,
     car?: boolean,
     profissao:T

}

type Doctor = {
     crm: number
}

interface Student2  {
     ra:number
}


let medico: Person2<Doctor>
let estudante: Person



