"use strict";
//Normalmente um array contém de zero à muitos objetos de um mesmo tipo. O TypeScript possui uma análise especial sobre arrays que contêm múltiplos tipos, e quando a ordem em que eles estão indexados é importante. Esses são chamados de tuplas.
// Ex 01 uso simples de tuplas  em Typescript
let pessoa;
pessoa = ['Marcus', 'Programador', 25];
// Ex 02 Acessando o valor da Tupla
let pessoa2;
pessoa2 = ['Marcus', 'Programador', 25];
// Ex 03 Outra forma de usar Tuplas (com labels)
let pessoa3 = ['Marcus', 'Programador', 25];
//Ex 04 Usando Tuplas com spread operator 
let listaFrutas = ['melao', 'melancia', 'maça']; // lista homogenea
//Ex 05 Lista Heterogenea de tupla
let listafrutas2 = [5, true, ...listaFrutas];
// Ex 06 Uso de Funcao com Tuplas
function parametrosComTuplas(nome, idade) {
    return [...nome, ...idade];
}
let resultado = parametrosComTuplas(['Marcus', 'vinicius'], [25, 10]);
function criarPessoa(...nome) {
    return [...nome];
}
