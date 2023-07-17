// Declaração de função

function minhaFuncao (param) {
    // Bloco de código
}

minhaFuncao("param");

//Expressão de função

//const soma = function(num1, num2) {return num1 + num2}

//console.log(soma(1, 1));

//Diferença Principal: HOISTING
//Funções e Var são "Listadas" no topo do Arquivo.


console.log(apresentar()) 
    function apresentar() {
        return "Olá";
    }

    console.log(soma(1, 1))
    const soma = function(num1, num2) {return num1 + num2}
