const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1235678954",
    email: "andre@gmail.com",
    fones: ["559123598","552198873124"]
};

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
};

console.log(cliente);

cliente.dependentes.nome="Sara Silva";

console.log(cliente);