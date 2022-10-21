 /* Type Annotations */


 //====String
 let nome: string = 'Nery'
 console.log(nome)



//=====arrays 
let animais: any = [ 6,'Elefante', 'Coala','Gato','Panda', 5]
console.log(animais)




//===== Objetos 

let carro: {
     nome: string ;
     ano: number;
     preco:number 
};
carro = {
     nome: 'sedan',
     ano: 2019,
     preco: 20.000
 
}
console.log(carro.nome)



// ==== function 
let somar = (n1:number , n2:number) => {
     return  n1 + n2
}
console.log(somar(2,7))


//boolean
let acordou:boolean = true;
let dormindo: boolean = false;

if(acordou){
     console.log('Esta acordado')
} else {
     console.log('esta dormindo')
}



