const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1235678954",
    email: "andre@gmail.com",
    fones: ["559123598","552198873124"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
};

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
});

// console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente =>dependente.dataNasc=="04/01/2014");

console.log(filhaMaisNova[0].nome);