
//push
let array3: Array<number> = [1,2,3]
array3.push(4)


// array com spread operator 
let listanumeros: Array<number>= [0,8,8,7,4,7]
listanumeros = [...listanumeros,6,7,8,9,10]


let linguagensArray: string[] = new Array ('JavaScript','python','C#');

function funcaolinguagens(linguagens:string[]){

     for(let i=0; i<linguagens.length; i++){
          
          console.log(linguagens[i]);
     }

}   funcaolinguagens(linguagensArray)


