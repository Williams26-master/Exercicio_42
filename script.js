let btn = document.getElementById('btn')
let div = document.getElementById('content')

function imprimirNumeros() {
  
  let numero = parseInt(document.getElementById('numero').value)
  let cores = ['success', 'warning', 'info', 'danger', 'primary', 'secondary'] 
  let corIndex = 0 
  
  if (numero < 10) {
    for (let i = 20; i >= numero; i--) {
      let corAtual = cores[corIndex % cores.length] 
      div.innerHTML += `<p class="alert alert-${corAtual}">${i}</p>`
      corIndex++
    }
  } else {
    alert('Erro... digite um numero menor que 10!')
  }
}

btn.addEventListener('click', imprimirNumeros)
