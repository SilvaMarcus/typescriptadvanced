// crie uma funcao que recebe dois numeros como parametro retorne o maior valores entre eles. 


 const maiorValor = (n1:number,n2:number): number => {
     return Math.max(n1,n2)
}


// crie uma funcao que compara dois valores e nos diz se sao da mesma especia e nao pelo valor;
const compara = (valor1:any, valor2:any): string => {
  
     if (typeof valor1 === typeof valor2) {
         return  'são iguais'
     } else{
         return 'são diferente'
     }
} 

