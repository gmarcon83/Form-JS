let radioOption, valor1, valor2, caixaDeTexto;

// Atribui valores as variáveis após finalizar o carregamento da página
window.onload = () => {
    radioOption = document.getElementsByName("tipo-funcao");
    valor1 = document.getElementById("valor1");
    valor2 = document.getElementById("valor2");
    caixaDeTexto = document.getElementById("caixa-de-resposta");
  };

// A função "principal", ativada quando é clicado o botão, executa
// um dos calculos, de acordo com a opção selecionada.
function click(){
    let val1, val2, calc;
    switch (descobrirOpcaoRadio()){
        case "soma":
            val1 = parseInt(valor1.value);
            val2 = parseInt(valor2.value);
            calc = somar(val1, val2);
            escreverResultado(calc, "A soma de " + val1+ " e " + val2 + " é: ");
            break;
        case "subtracao":
            val1 = parseInt(valor1.value);
            val2 = parseInt(valor2.value);
            calc = subtrair(val1, val2);
            escreverResultado(calc, "O resto de " + val1+ " menos " + val2 + " é: ");
            break;
        case "multiplicacao":
            val1 = parseInt(valor1.value);
            val2 = parseInt(valor2.value);
            calc = multiplicar(val1, val2);
            escreverResultado(calc, "A multiplicação de " + val1 + " por " + val2 + " é: ");
            break;
        case "divisao":
            val1 = parseInt(valor1.value);
            val2 = parseInt(valor2.value);
            calc = dividir(val1, val2);
            escreverResultado(calc, "A divisão de " + val1 + " por " + val2 + " é: ");
            break;
        case "fatorial":
            val1 = parseInt(valor1.value);
            calc = fatorear(val1)
            escreverResultado(calc, val1 + "! é: ");
            break;
        case "raiz-quadrada":
            val1 = parseInt(valor1.value);
            calc = radiciar(val1)
            escreverResultado(calc, "A raiz quadrada de " + val1 + " fica: ");
            break;
        case "potencia":
            val1 = parseInt(valor1.value);
            val2 = parseInt(valor2.value);
            calc = potenciar(val1, val2);
            escreverResultado(calc, val1 + " elevado a potência de " + val2 + " fica: ");
            break;
    }
}

// Desativa o input 2 conforme o necessário
function lock(lock){
    if (lock)
        valor2.disabled = true;
    else
        valor2.disabled = false;
}

// Busca em todos os itens radio qual tem o valor "checked" e retorna seu value
function descobrirOpcaoRadio() {
    let nome;
    for (let i of radioOption) {
        if (i.checked)
            nome = i.value;
    }
    return nome;
}

function escreverResultado(resultado, textoExtra){
    caixaDeTexto.value = textoExtra + resultado;
}