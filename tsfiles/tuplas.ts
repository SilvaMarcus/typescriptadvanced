// Ex 01 uso simples de tuplas  em Typescript
let pessoa: [string, string, number];
pessoa = ['Marcus','Programador', 25];

// Ex 02 Acessando o valor da Tupla
let pessoa2: [string, string, number];
pessoa2 = ['Marcus','Programador', 25];

// Ex 03 Outra forma de usar Tuplas (com labels)
let pessoa3: [nome:string, posicao:string, idade:number] = ['Marcus','Programador',25];


//Ex 04 Usando Tuplas com spread operator 
let listaFrutas: [string, ...string[]] = ['melao', 'melancia','maça']; // lista homogenea

//Ex 05 Lista Heterogenea de tupla

let listafrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];


// Ex 06 Uso de Funcao com Tuplas
function parametrosComTuplas (nome:string[], idade:number[]) {

  return [...nome, ...idade]
} 
let resultado = parametrosComTuplas(['Marcus','vinicius'],[25,10])  
 


// Ex 07 Labled Tuples com spread operator numa funcao 
type Nome = 
     |[primeiroNome: string, sobrenome:string,]
     |[primeiroNome:string, nomeMedio:string, sobrenome:string]

     function criarPessoa (...nome: Nome) {

          return [...nome]

     } 

    