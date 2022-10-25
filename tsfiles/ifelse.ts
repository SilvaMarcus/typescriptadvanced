
let checkNotas = (nota:number) => {
     if(nota < 6 ) {
          console.log('Voce esta de Recuperação');
     } else{
          console.log('Aprovado !!')
     }
}


// Premium maior que 100, abaixo ou igual é Cliente comum

// com if 
let pontos: number = 100;
let tipo:string = ''
if(pontos > 100){
     tipo = 'Cliente Premium'
}else {
     tipo = 'Cliente Standard'
}


// ternario 
let pontos2: number = 200;
let tipo2:string = pontos2 > 100 ? 'Cliente Premium' : 'Cliente Comum';
