"use strict";
/* Type Annotations */
//====String
let nome = 'Nery';
console.log(nome);
//=====arrays 
let animais = [6, 'Elefante', 'Coala', 'Gato', 'Panda', 5];
console.log(animais);
//===== Objetos 
let carro;
carro = {
    nome: 'sedan',
    ano: 2019,
    preco: 20.000
};
console.log(carro.nome);
// ==== function 
let somar = (n1, n2) => {
    return n1 + n2;
};
console.log(somar(2, 7));
//boolean
let acordou = true;
let dormindo = false;
if (acordou) {
    console.log('Esta acordado');
}
else {
    console.log('esta dormindo');
}
