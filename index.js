const $campo0 = document.querySelector(".campo-0")
const $campo1 = document.querySelector(".campo-1")
const $campo2 = document.querySelector(".campo-2")
const $campo3 = document.querySelector(".campo-3")
const $campo4 = document.querySelector(".campo-4")
const $campo5 = document.querySelector(".campo-5")
const $campo6 = document.querySelector(".campo-6")
const $campo7 = document.querySelector(".campo-7")
const $campo8 = document.querySelector(".campo-8")

let jogada = 'X'

function toggleJogada() {
    if (jogada == 'X') {
        jogada = 'O'
    } else{
        jogada='X'
    }
        
    
}

$campo0.addEventListener('click', function () {
    $campo0.textContent = jogada
    toggleJogada()
})
$campo1.addEventListener('click', function () {
    $campo1.textContent = jogada
    toggleJogada()
})
$campo2.addEventListener('click', function () {
    $campo2.textContent = jogada
    toggleJogada()
})
$campo3.addEventListener('click', function () {
    $campo3.textContent = jogada
    toggleJogada()
})
$campo4.addEventListener('click', function () {
    $campo4.textContent = jogada
    toggleJogada()
})
$campo5.addEventListener('click', function () {
    $campo5.textContent = jogada
    toggleJogada()
})
$campo6.addEventListener('click', function () {
    $campo6.textContent = jogada
    toggleJogada()
})
$campo7.addEventListener('click', function () {
    $campo7.textContent = jogada
    toggleJogada()
})
$campo8.addEventListener('click', function () {
    $campo8.textContent = jogada
    toggleJogada()
})


