function simularClique(valor) {
  adicionar(valor); // usa a função da calculadora
}

function assert(esperado, obtido, descricao) {
  if (esperado === obtido) {
    console.log(`✅ ${descricao}`);
  } else {
    console.error(`❌ ${descricao} — Esperado: ${esperado}, Obtido: ${obtido}`);
  }
}

function testarCalculadora() {
  // Teste 1: Soma
  limpar();
  simularClique('2');
  simularClique('+');
  simularClique('3');
  calcular();
  assert('5', document.getElementById('display').value, '2 + 3 = 5');

  // Teste 2: Subtração
  limpar();
  simularClique('7');
  simularClique('-');
  simularClique('4');
  calcular();
  assert('3', document.getElementById('display').value, '7 - 4 = 3');

  // Teste 3: Multiplicação
  limpar();
  simularClique('5');
  simularClique('*');
  simularClique('6');
  calcular();
  assert('30', document.getElementById('display').value, '5 * 6 = 30');

  // Teste 4: Divisão
  limpar();
  simularClique('8');
  simularClique('/');
  simularClique('2');
  calcular();
  assert('4', document.getElementById('display').value, '8 / 2 = 4');

  // Teste 5: Expressão com ponto
  limpar();
  simularClique('1');
  simularClique('.');
  simularClique('5');
  simularClique('+');
  simularClique('2');
  simularClique('.');
  simularClique('5');
  calcular();
  assert('4', document.getElementById('display').value, '1.5 + 2.5 = 4');

  // Teste 6: Erro
  limpar();
  simularClique('/');
  simularClique('2');
  calcular();
  assert('Erro', document.getElementById('display').value, 'Expressão inválida');
}

// Executar testes ao carregar a página
window.onload = testarCalculadora;
