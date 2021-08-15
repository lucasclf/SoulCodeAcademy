function Validacao(){
  // SE NÃO FOR NUMERO OU MENOR QUE ZERO O CAMPO SERÁ LIMPO
  var quantidade = document.getElementById('moeda_valor');
if( isNaN(quantidade.value)|| quantidade.value <0){
  alert('O Campo não aceita Letras ou valores Negativos');
  quantidade.value=""
}
}

function inverter(event) {
  event.preventDefault();
  // PREVINE O COMPORTAMENTO DE ATUALIZAR PÁGINA

// PEGA ELEMENTO SELECT
  var select_moeda_a = document.getElementById('moeda_original_a')
  var select_moeda_b = document.getElementById('moeda_original_b')
//PEGA O VALOR DO ELEMENTO ESCOLHIDO
  var valor_select_a = select_moeda_a.value
  var valor_select_b = select_moeda_b.value
//INVERTE OS VALORES ESCOLHIDOS/  A =B E B=A
  select_moeda_a.value = valor_select_b
  select_moeda_b.value = valor_select_a
}

function converter(event) {
  // PARA O COMPORTAMENTO DE ATUALIZAR A PAGINA
  event.preventDefault();
  // PEGA ELEMENTO SELECT
  var select_moeda_a = document.getElementById('moeda_original_a')
  var select_moeda_b = document.getElementById('moeda_original_b')
//PEGA O VALOR DO ELEMENTO ESCOLHIDO
  var valor_select_a = select_moeda_a.value
  var valor_select_b = select_moeda_b.value
  // H1 CONVERSÃO DE MOEDA DO ELEMENTO
  var resultadoEl = document.getElementById('resultado');
// VALOR DIGITADO PELO  USUÁRIO
  var moeada_valor = document.getElementById('moeda_valor').value;
  // CASO VALOR SELECIONADO FOR DOLA AMERICANO   
  switch (valor_select_a) {
     // CASO VALOR SELECIONADO FOR DOLA AMERICANO   
    case 'dolar-americano':
      // SE A  SEGUNDA MOEDADA FOR DOLA CANADENSE  MULTIPLICA PELO DOLAR CANADENSE
      if (valor_select_b == "dolar-canadense") {
        conversao = moeada_valor * 1.25
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      } 
      else if (valor_select_b == "real-brasileiro") {
        conversao = moeada_valor * 5.25
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "euro") {
        conversao = moeada_valor * 0.85
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "libra") {
        conversao = moeada_valor * 15.70
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "peso-argentino") {
        conversao = moeada_valor * 97.08
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      break;
    case 'dolar-canadense':
      if (valor_select_b == "dolar-americano") {
        conversao = moeada_valor * 0.80
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "real-brasileiro") {
        conversao = moeada_valor * 4.19
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "euro") {
        conversao = moeada_valor * 0.65
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "libra") {
        conversao = moeada_valor * 12.54
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "peso-argentino") {
        conversao = moeada_valor * 77.59
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      break;
    case 'real-brasileiro':
      if (valor_select_b == "dolar-americano") {
        conversao = moeada_valor * 0.19
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "dolar-canadense") {
        conversao = moeada_valor * 0.24
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "euro") {
        conversao = moeada_valor * 0.16
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "libra") {
        conversao = moeada_valor * 2.99
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "peso-argentino") {
        conversao = moeada_valor * 18.49
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      break;
    case 'euro':
      if (valor_select_b == "dolar-americano") {
        conversao = moeada_valor * 1.18
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "dolar-canadense") {
        conversao = moeada_valor * 1.48
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "real-brasileiro") {
        conversao = moeada_valor * 6.19
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "libra") {
        conversao = moeada_valor * 18.52
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "peso-argentino") {
        conversao = moeada_valor * 114.53
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      break;
    case 'libra':
      if (valor_select_b == "dolar-americano") {
        conversao = moeada_valor * 0.064
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "dolar-canadense") {
        conversao = moeada_valor * 0.08
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "real-brasileiro") {
        conversao = moeada_valor * 0.33
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "euro") {
        conversao = moeada_valor * 0.054
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "peso-argentino") {
        conversao = moeada_valor * 6.19
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      break;
    case 'peso-argentino':
      if (valor_select_b == "dolar-americano") {
        conversao = moeada_valor * 0.01
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "dolar-canadense") {
        conversao = moeada_valor * 0.013
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "real-brasileiro") {
        conversao = moeada_valor * 0.054
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "euro") {
        conversao = moeada_valor * 0.0087
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      else if (valor_select_b == "libra") {
        conversao = moeada_valor * 0.16
        resultadoEl.innerHTML = 'Resultado da conversão:' + parseFloat(conversao).toFixed(2);
      }
      break;
    default:
      break;
  }
}

function modo_noturno() {
    for (i=0; i<document.getElementsByTagName("p").length; i++){
        document.getElementsByTagName("p")[i].style.color = "white"
    }
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementsByTagName("H1")[0].style.color = "white";
    document.getElementsByTagName("H2")[0].style.color = "white";
}

function modo_diurno() {
  for (i=0; i<document.getElementsByTagName("p").length; i++){
    document.getElementsByTagName("p")[i].style.color = "black"
}
document.getElementsByTagName("body")[0].style.backgroundColor = "white";
document.getElementsByTagName("H1")[0].style.color = "black";
document.getElementsByTagName("H2")[0].style.color = "black";
}