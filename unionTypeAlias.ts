
// union nos diz que nosso tipo pode receber um tipo ou outro
//quantos tipos quiser separando por | 
let id: number | string;

//type alias 
// COMO CRIAR UM TYPE NO TYPESCRIPT
// usar  "type" o nome do tipo com primeira letra maiuscula string | number 
type Id = number | string; 

// Agora todos os codigos receberam o tipo Id que espera um number ou string
let id1: Id; 
let id2: Id;
let id3: Id;
let id4: Id;


// outro exemplo com objetos 

// criamos o tipo Usuario
type Usuario = {nome:string, idade:number}

// a let user é do tipo Usuario
let user: Usuario;
