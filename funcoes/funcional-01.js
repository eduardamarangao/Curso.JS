function executarTudo(...funcoes) {
    funcoes.forEach((funcao) => funcao())
}

const bomDia = () => console.log('Bom dia!');
const boaTarde = () => console.log('Boa tarde!');

function boaNoite() {
    console.log('Boa noite!');
}

executarTudo(bomDia, boaTarde, boaNoite);