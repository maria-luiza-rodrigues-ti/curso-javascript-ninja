/*
Crie um array com 5 items (tipos variados).
*/
var myarray = ['malori', 515, { color: 'verde'}, function(){}, null]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(param) {
    myarray.push(param);
    var qtd = myarray.length;

    while (qtd > 0) {
        console.log( myarray[--qtd]);
    }
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([{}, true, -1]);
/*[ {}, true, -1 ]
null
[Function (anonymous)]
{ color: 'verde' }
515
malori*/


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
for (var i = 0; i < myarray.length; i++) {
    if ( i === myarray.length ) {
        console.log("O segundo elemento do segundo array é "+ myarray[myarray.length][i]);
    } 
    console.log(myarray[i]);
}

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
var myarray = ['malori', 515, { color: 'verde'}, function(){}, null];
console.log('O primeiro array tem ' + myarray.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
var myarray2 = ['malori', 515, { color: 'verde'}, function(){}, null, [ {}, true, -1 ] ];
console.log('O segundo array tem ' + myarray2.length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
num = 9;

while (num <= 20) {
    ( (++num) % 2 ) === 0 ? console.log(num) : '';
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
num = 10;

while (num < 20) {
    ( (++num) % 2 ) != 0 ? console.log(num) : '';
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for ( var i = 100 ; i <= 120 ; ++i ) {
    ( i % 2 ) === 0 ? console.log(i) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for ( var i = 100 ; i <= 120 ; ++i ) {
    ( i % 2 ) != 0 ? console.log(i) : '';
}