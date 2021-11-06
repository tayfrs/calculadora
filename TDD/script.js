var numero1 = document.querySelector('#numero1')
var numero2 = document.querySelector('#numero2')
var resultado = document.querySelector('span')

function somar() {
    fazerRequisicao()
    resultado.innerHTML = parseInt(numero1.value) + parseInt(numero2.value);
}

function subtrair() {
    fazerRequisicao()
    resultado.innerHTML = parseInt(numero1.value) - parseInt(numero2.value)
}

function multiplicar() {
    fazerRequisicao()
    resultado.innerHTML = parseInt(numero1.value) * parseInt(numero2.value)
}

function dividir() {
    fazerRequisicao()
    resultado.innerHTML = parseInt(numero1.value) / parseInt(numero2.value)
}

function fazPost(url, body) {
    console.log("Body=", body)

    /*Mandando para o servidor*/
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json") //Dizendo que estamos mandando
    request.send(JSON.stringify(body)) //enviamos

    request.onload = function() {
        console.log(this.responseText) //carrega
    }

    return request.responseText //retorna o conteudo
}

function fazerRequisicao() {
    event.preventDefault();
    let url = "https://dweet.io/dweet/for/calculadoraIFSP"

    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value

    console.log(numero1)
    console.log(numero2)

    body = {
        "numero1": numero1,
        "numero2": numero2
    }
    fazPost(url, body)
}