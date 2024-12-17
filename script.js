const visor = document.getElementById('visor');
let result = '';  // Variável que irá armazenar o resultado
let op = '';      // Operador (+, -, *, /)
let str1 = '';    // Primeira parte do número
let str2 = '';    // Segunda parte do número

function limpar_visor() {
    result = ''
}

// Função para armazenar a operação
function salvar_op(op1) {
    op = op1;  // Armazena a operação selecionada
    visor.innerHTML = str1 + op;  // Atualiza o visor com a operação
}

// Função para capturar os números pressionados
function salvar_num(botao) {
    // Se str1 estiver vazio, armazena o valor do botão em str1
    if (str1 === '') {
        str1 = botao.innerText;  // armazena o primeiro número
    } else if (op === '') {
        // Se a operação não foi escolhida ainda, continua acumulando o número em str1
        str1 += botao.innerText;  // adiciona mais dígitos ao primeiro número
    } else {
        // Caso contrário, armazena o valor do botão em str2
        str2 += botao.innerText;  // armazena o segundo número
    }

    // Atualiza o visor com os números e a operação
    visor.innerHTML = str1 + op + str2;
}

// Função para realizar o cálculo quando pressionado "="
function calcular() {
    // Converte as strings str1 e str2 para números
    const n1 = +str1;
    const n2 = +str2;

    // Realiza a operação com base no operador
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                result = 'Erro';  // Caso de divisão por zero
            }
            break;
        default:
            result = '';
            break;
    }

    // Exibe o resultado no visor
    visor.innerHTML = result;

    // Limpa as variáveis após o cálculo
    str1 = result.toString();
    str2 = '';
    op = '';
}
