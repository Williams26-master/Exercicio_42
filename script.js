let btn = document.getElementById(`btn`)
let div = document.getElementById(`content`)

function calc() {
    let n1 = parseInt(document.getElementById('numero').value)

    if (n1 > 10) {
        div.innerHTML = `
            Numero invalido
        `
        console.log("numero invalido")
    } else {
        for (let i = 20; i <= n1; i++) {          
           div.innerHTML = `${i}<br>`
           console.log(i)
        }
    }
}
btn.addEventListener('click', calc)

