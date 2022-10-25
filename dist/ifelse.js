"use strict";
let checkNotas = (nota) => {
    if (nota < 6) {
        console.log('Voce esta de Recuperação');
    }
    else {
        console.log('Aprovado !!');
    }
};
// Premium maior que 100, abaixo ou igual é Cliente comum
// com if 
let pontos = 100;
let tipo = '';
if (pontos > 100) {
    tipo = 'Cliente Premium';
}
else {
    tipo = 'Cliente Standard';
}
// ternario 
let pontos2 = 200;
let tipo2 = pontos2 > 100 ? 'Cliente Premium' : 'Cliente Comum';
