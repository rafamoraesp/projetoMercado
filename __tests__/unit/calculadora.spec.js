// Bibliotecas
// Apontamento para o arquivo de desenvolvimento que vamos testar
const calculadora = require("../../src/calculadora.js");

//Funções de testes de unidade
test("somar 5 + 7", () => {
    // 1 - Configura / Arrange
    // 1.1 Dados de Entrada
    const num1 = 5;
    const num2 = 7;

    // 1.2 Resultado Esperado / saída
    const resultadoEsperado = 12;

    // 2 - Executa / Act
    // criando um objeto para receber a funcao da calculadora
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    // executando a funcao DoisNumeros e guardando o resultado
    const resultadoAtual = somarDoisNumeros(num1, num2);
    
    // 3 - Valida / Assert
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test("subtrair 15 - 7", () => {
    const num1 = 15;
    const num2 = 7;
    const resultadoEsperado = 8;

    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoAtual = subtrairDoisNumeros(num1, num2);

    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("multiplicar 3 * 7", () => {
    const num1 = 3;
    const num2 = 7;
    const resultadoEsperado = 21;

    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    const resultadoAtual = multiplicarDoisNumeros(num1, num2);

    expect(resultadoAtual).toBe(resultadoEsperado);
})
// HP ALM Data Driven Test
let massaDivisao = [
    [10, 5, 2],
    [15, 3, 5],
    [8, 4, 2]
];

test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {
    // Configura
    // Dados de entrada e resultado esperado são providos pela lista massaDivisao
  
    // Executa
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);

    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("Dividir 27 / 9", () => {
    const num1 = 27;
    const num2 = 9;
    const resultadoEsperado = 3;

    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);

    expect(resultadoAtual).toBe(resultadoEsperado);
})