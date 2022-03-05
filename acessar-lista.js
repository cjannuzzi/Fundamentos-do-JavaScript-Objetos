const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1235678954",
    email: "andre@gmail.com"
};
                //0        //1    //2      //3
const chaves = ["nome", "idade", "cpf", "email"];

// console.log(cliente[chaves[0]]);

chaves.forEach(info=>console.log(cliente[info]));

//E o método forEach(), lembrando, ele é um método que precisa de uma função callback para funcionar, então passamos info como sendo parâmetro, então para cada info para cada chave que tem dentro do nosso array de chaves o JavaScript percorreu e executou aqui console.log() acessando o nosso objeto cliente na posição info.
//  Então da primeira vez que ele passar no forEach info se refere a nome, então cliente na chave nome, depois cliente na chave idade, depois cliente na chave cpf e até o fim, e ele conseguiu exibir no console todas as informações automaticamente.
//A notação de colchete de objetos ela também funciona se você quiser é exibir uma informação, console.log() passando a chave exatamente utilizando aspas, então podemos exibir cliente abre colchetes e passa o nome da chave exata que já sabemos assim entre aspas, console.log(cliente[“nome”]) no formato string também é uma forma de usarmos notação de colchete, dessa vez quando sabemos exatamente qual é o nome da chave que queremos pegar, também vai funcionar.
// Porém quando já trabalhamos com nome de chave fixo, costumamos usar mais a notação de ponto e a notação quando precisamos passar aqui a chave como variável por exemplo como no caso do forEach() que cada vez que passar no loop vai ser um índice diferente, vai ser um valor diferente.

console.log(cliente["conta"]);