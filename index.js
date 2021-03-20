const $body = document.querySelector('body')
const $section = document.querySelector('.wrapper-historico-player')
const $campo = document.querySelectorAll('.campo')
const $dampo0 = document.querySelector(".campo-0")
const $campo1 = document.querySelector(".campo-1")
const $campo2 = document.querySelector(".campo-2")
const $campo3 = document.querySelector(".campo-3")
const $campo4 = document.querySelector(".campo-4")
const $campo5 = document.querySelector(".campo-5")
const $campo6 = document.querySelector(".campo-6")
const $campo7 = document.querySelector(".campo-7")
const $campo8 = document.querySelector(".campo-8")

const $buttonJogar = document.querySelector('.button-play')
const $buttonReiniciar = document.querySelector('.button-reiniciar')

const linha1 = [$campo[0], $campo[1], $campo[2]]
const linha2 = [$campo[3], $campo[4], $campo[5]]
const linha3 = [$campo[6], $campo[7], $campo[8]]

const coluna1 = [$campo[0], $campo[3], $campo[6]]
const coluna2 = [$campo[1], $campo[4], $campo[7]]
const coluna3 = [$campo[2], $campo[5], $campo[8]]

const diagonal1 = [$campo[0], $campo[4], $campo[8]]
const diagonal2 = [$campo[2], $campo[4], $campo[6]]

const verifyArray = [linha1, linha2, linha3, coluna1, coluna2, coluna3, diagonal1, diagonal2]

const $placarcontador1 = document.querySelector('.placar-contador1')
const $placarcontador2 = document.querySelector('.placar-contador2')

const $inputplayer1 = document.querySelector('.input-player1')
const $inputplayer2 = document.querySelector('.input-player2')
const $nomeJogador = document.querySelector('.nome-jogador')

const $jogadasHitoricowrapper = document.querySelector('.jogadas-wrapper')
const $historicoDeCampos = document.querySelector('.wrapper-historico-player')

const $buttonBot = document.querySelector('.button-bot')
const $buttonMd = document.querySelector('.button-md')

const $posicaoQuadradosbot = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto', 'Sexto', 'Setimo', 'Oitavo', 'Nono']

const historicoCardList = []

let jogada = 'X'
let pontosJogador1 = 0
let pontosJogador2 = 0
let jogoRodando = false
let botAtivado = false
let modoDeJogo = 3





const reiniciarTudo = () => {
    resetCampos()
    resetImprimirJogadas()
    resetarPontos()
    $section.innerHTML = ''
    jogoRodando = false



}

const resetarPontos = () => {
    pontosJogador1 = 0
    pontosJogador2 = 0
    $placarcontador1.textContent = '00'
    $placarcontador2.textContent = '00'

}

const toggleJogada = () => {
    if (jogada == 'X') {
        jogada = 'O'
    } else {
        jogada = 'X'
    }
}

const verifyJogo = () => {
    let resultado = ''
    for (const verify of verifyArray) {
        if (verify[0].textContent != '' && verify[0].textContent == verify[1].textContent && verify[1].textContent == verify[2].textContent) {
            resultado = verify[0].textContent
        }
    }
    if (
        $campo[0].textContent != '' &&
        $campo[1].textContent != '' &&
        $campo[2].textContent != '' &&
        $campo[3].textContent != '' &&
        $campo[4].textContent != '' &&
        $campo[5].textContent != '' &&
        $campo[6].textContent != '' &&
        $campo[7].textContent != '' &&
        $campo[8].textContent != '' &&
        resultado == '') {
        resultado = 'empate'
    }


    return resultado
}

const modal = (text) => {
    const modalBox = document.createElement('div')
    modalBox.classList.add('modal-box')
    const modal = document.createElement('div')
    modal.classList.add('modal')
    const modalTexto = document.createElement('span')
    modalTexto.classList.add('modal-texto')
    modalTexto.textContent = text
    const modalButton = document.createElement('button')
    modalButton.classList.add('modal-button')
    modalButton.textContent = 'Ok'

    $body.appendChild(modalBox)
    modalBox.appendChild(modal)
    modal.appendChild(modalTexto)
    modal.appendChild(modalButton)
    modalButton.addEventListener('click', () => {
        modalBox.remove()
    })

}



const verifyModoDeJogo = (winner) => {
    let nomeGanhador = imprimirNomeJogador(verifyJogo())


    if (modoDeJogo === 3) {
        if (pontosJogador1 === 2 || pontosJogador2 === 2 || pontosJogador1 > 2 || pontosJogador2 > 2) {
            modal(`Jogador ${nomeGanhador} Ganhou`)
            resetarPontos()
            jogoRodando = false
            $buttonJogar.classList.remove('button-jogar-on')
        }
    } else if (pontosJogador1 === 3 || pontosJogador2 === 3 || pontosJogador1 > 3 || pontosJogador2 > 3) {
        modal(`Jogador ${nomeGanhador} Ganhou`)
        resetarPontos()
        jogoRodando = false
        $buttonJogar.classList.remove('button-jogar-on')
    }

}


const imprimirHistorico = (winner) => {
    let nomeGanhador = imprimirNomeJogador(verifyJogo())

    const boxHistoricoPlayer = document.createElement('div')
    boxHistoricoPlayer.classList.add('box-historico-player')

    const historicoPlayer = document.createElement('div')
    historicoPlayer.classList.add('historico-player')

    const vencedorHistorico = document.createElement('span')
    vencedorHistorico.classList.add('vencedor')
    vencedorHistorico.textContent = 'Vencedor'

    const nomeVencedor = document.createElement(`span`)
    nomeVencedor.classList.add('nome-vencedor-historico')
    nomeVencedor.textContent = `${nomeGanhador}`


    const cenario = document.createElement(`span`)
    cenario.classList.add('span-cenario')
    cenario.textContent = 'Cenario'

    const campoCenario = document.createElement('div')
    campoCenario.classList.add('campo-cenario')

    const campohistorico0 = document.createElement(`span`)
    campohistorico0.classList.add('campo-historico')
    campohistorico0.textContent = `${$campo[0].textContent}`
    const campohistorico1 = document.createElement(`span`)
    campohistorico1.classList.add('campo-historico')
    campohistorico1.textContent = `${$campo[1].textContent}`
    const campohistorico2 = document.createElement(`span`)
    campohistorico2.classList.add('campo-historico')
    campohistorico2.textContent = `${$campo[2].textContent}`
    const campohistorico3 = document.createElement(`span`)
    campohistorico3.classList.add('campo-historico')
    campohistorico3.textContent = `${$campo[3].textContent}`
    const campohistorico4 = document.createElement(`span`)
    campohistorico4.classList.add('campo-historico')
    campohistorico4.textContent = `${$campo[4].textContent}`
    const campohistorico5 = document.createElement(`span`)
    campohistorico5.classList.add('campo-historico')
    campohistorico5.textContent = `${$campo[5].textContent}`
    const campohistorico6 = document.createElement(`span`)
    campohistorico6.classList.add('campo-historico')
    campohistorico6.textContent = `${$campo[6].textContent}`
    const campohistorico7 = document.createElement(`span`)
    campohistorico7.classList.add('campo-historico')
    campohistorico7.textContent = `${$campo[7].textContent}`
    const campohistorico8 = document.createElement(`span`)
    campohistorico8.classList.add('campo-historico')
    campohistorico8.textContent = `${$campo[8].textContent}`

    boxHistoricoPlayer.appendChild(historicoPlayer)
    boxHistoricoPlayer.appendChild(cenario)
    boxHistoricoPlayer.appendChild(campoCenario)

    historicoPlayer.appendChild(vencedorHistorico)
    historicoPlayer.appendChild(nomeVencedor)

    campoCenario.appendChild(campohistorico0)
    campoCenario.appendChild(campohistorico1)
    campoCenario.appendChild(campohistorico2)
    campoCenario.appendChild(campohistorico3)
    campoCenario.appendChild(campohistorico4)
    campoCenario.appendChild(campohistorico5)
    campoCenario.appendChild(campohistorico6)
    campoCenario.appendChild(campohistorico7)
    campoCenario.appendChild(campohistorico8)

    $section.appendChild(boxHistoricoPlayer)

}

const imprimirJogadas = (Quadrado) => {
    let jogadorNome = ""
    if (jogada == 'X') {
        jogadorNome = $inputplayer1.value
    } else {
        jogadorNome = $inputplayer2.value
    }

    const div = ` <div class="jogadas-box">
        <span class="span-xo">${jogada}</span>
        <div class="organizar">
            <span class='nome-do-jogador'>${jogadorNome}</span>
            <span class="quadros">${Quadrado} Quadro</span>
        </div>
    </div>`

    $jogadasHitoricowrapper.innerHTML += div
    console.log(historicoCardList)
    handleHistoricoCard()
    addHistoricoDeJogadas()
}

const handleHistoricoCard = () => {
    const $historicoCard = document.querySelectorAll('.jogadas-box')

    for (let i = 0; i < $historicoCard.length; i++) {
        const card = $historicoCard[i]
        card.addEventListener('click', () => {
            imprimirHistoricoDeJogadas(i)
        })
    }
}

const addHistoricoDeJogadas = () => {
    const $campo = document.querySelectorAll('.campo')

    const novoHistorico = []

    for (const $quadrado of $campo) {
        novoHistorico.push($quadrado.textContent)
    }
    historicoCardList.push(novoHistorico)
}
const imprimirHistoricoDeJogadas = (index) => {
    const $campo = document.querySelectorAll('.campo')

    for (let i = 0; i < historicoCardList[index].length; i++) {
        $campo[i].textContent = historicoCardList[index][i]
    }
}


const resetImprimirJogadas = () => {
    $jogadasHitoricowrapper.innerHTML = ''
    historicoCardList.length = 0
}

const addPontos = (winner) => {
    if (winner == 'X') pontosJogador1++

        if (winner == 'O') pontosJogador2++


}

const imprimirPontos = () => {
    if (pontosJogador1 < 10) {
        $placarcontador1.textContent = '0' + pontosJogador1
    } else if (pontosJogador1 > 9) {
        $placarcontador1.textContent = pontosJogador1

    }
    if (pontosJogador2 < 10) {
        $placarcontador2.textContent = '0' + pontosJogador2
    } else if (pontosJogador2 > 9) {
        $placarcontador2.textContent = pontosJogador2

    }
}

const resetCampos = () => {
    for (const campo of $campo) {
        campo.textContent = ''
    }
}



const imprimirNomeJogador = (winner) => {
    let nomeWinner = ''

    if (winner == 'X') {
        $nomeJogador.textContent = $inputplayer1.value
        nomeWinner = ($inputplayer1.value)
    } else if (winner == 'O') {
        $nomeJogador.textContent = $inputplayer2.value
        nomeWinner = ($inputplayer2.value)
    } else if (winner == 'empate') {
        $nomeJogador.textContent = 'Empate'
        nomeWinner = 'Empate'
    }

    return nomeWinner
}

const bot = () => {
    const numeroAleatorio = Math.floor(Math.random() * 9)

    const $campoBot = document.querySelector(`.campo-${numeroAleatorio}`)



    if ($campoBot.textContent != '' && verifyJogo() == '') return bot()



    if ($campoBot.textContent != '' || jogoRodando == false) return

    $campoBot.textContent = jogada
    const vencedor = verifyJogo()
    imprimirJogadas($posicaoQuadradosbot[numeroAleatorio])
    toggleJogada()
    addPontos(vencedor)
    imprimirPontos()
    if (vencedor != '') {
        jogoRodando = false
        imprimirNomeJogador(vencedor)
        imprimirHistorico(vencedor)
        setTimeout(() => {
            jogoRodando = true
            resetImprimirJogadas()
            verifyModoDeJogo(vencedor)
            setTimeout(resetCampos, 500)
        }, 500)

    }


}
for (let i = 0; i < $campo.length; i++) {
    const Quadrado = $campo[i]
    Quadrado.addEventListener('click', () => {
        if (Quadrado.textContent != '' || jogoRodando == false) return
        Quadrado.textContent = jogada
        const vencedor = verifyJogo()
        imprimirJogadas($posicaoQuadradosbot[i])
        toggleJogada()
        addPontos(vencedor)
        imprimirPontos()
        if (botAtivado) bot()
        if (vencedor != '') {
            jogoRodando = false
            imprimirNomeJogador(vencedor)
            imprimirHistorico(vencedor)
            setTimeout(() => {
                jogoRodando = true
                resetImprimirJogadas()
                verifyModoDeJogo(vencedor)
            }, 500)
            setTimeout(resetCampos, 500)
            jogada = 'X'
        }
    })
}

$buttonBot.addEventListener('click', function() {
    for (const campo of $campo) {
        if (campo.textContent != '') return
    }
    $buttonBot.classList.toggle('button-on')
    botAtivado = !botAtivado
    if (botAtivado) {
        $inputplayer2.value = 'Bot'
        $inputplayer2.disabled = true
    } else {
        $inputplayer2.value = ''
        $inputplayer2.disabled = false
    }
})
$buttonMd.addEventListener('click', function() {

    $buttonMd.classList.toggle('button-md-on')

    if (modoDeJogo === 3) {
        modoDeJogo = 5

    } else {
        modoDeJogo = 3
    }
})

$buttonReiniciar.addEventListener('click', () => {
    reiniciarTudo()
})

$buttonJogar.addEventListener('click', () => {
    for (const campo of $campo) {
        if (campo.textContent != '') return
    }
    jogoRodando = true
    $buttonJogar.classList.toggle('button-jogar-on')

})