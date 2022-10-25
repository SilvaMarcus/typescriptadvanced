
let lista: string[] = ['Marcus','Vinicius',25]; // esta reclamando pois 25 é um number e declaramos o array como string
lista = ['Marcus','Vinicius','25']; // veja que agora ele aceita pois todos os dados são de fato strings 


let array: any[] = ['Marcus',25, true] // com o uso do tipo any, podemos atribuir qualquer valor ao dado 'any' valor... 

// porém devemos vitar ao maximo o uso, pois isso foge do objetivo e essencia do typescript que é tipar os dados para previnir erros.


