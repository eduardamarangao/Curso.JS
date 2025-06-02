function maiorNumero(a, b) {
    // return a > b ? a : b;
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maiorNumero(5, 20));

function parOuImpar(numero) {
    return numero % 2 === 0 ? 'Par' : 'Ímpar';
}

console.log(parOuImpar(7));
console.log(parOuImpar(8));
