const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1235678954",
    email: "andre@gmail.com",
    fones: ["559123598", "552198873124"],
    dependentes: [
      {
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011",
      },
      {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014",
      },
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
  };

function oferecerSeguro (obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    };
}

console.log(Object.values(cliente)); // mostra em forma de arrays.
console.log(Object.entries(cliente)); //mostra o array de forma melhor estruturada com indice [0] o nome: e [1] Andre e segue essa lógica. 
oferecerSeguro(cliente);