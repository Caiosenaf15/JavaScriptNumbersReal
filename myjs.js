//Questao 1
const btn01 = document.querySelector("#q01-executar")
const btn02 = document.querySelector("#q02-executar")
const btn03 = document.querySelector("#q03-executar")
const btn04 = document.querySelector("#q04-executar")
const btn05 = document.querySelector("#q05-executar")

/*****************************************
 * QUESTÃO 01
 */

/**
 * Função que retorna a quantidade de dinheiro digitada pelo usuário
 */
const getDinheiro = () => parseFloat(document.querySelector("#q01-dinheiro").value) || 0

/**
 * Função que calcula a quantidade de combustivel comprada
 * @param dinheiro
 * @return litros
 * obs: cada litro custa 7 reais para o exemplo
 * o valor inicial é só para testes
 */
const calcLitrosCombustivel = dinheiro => {
    // programe aqui a compra de combustível
    let calculoLitros = dinheiro / 7
    return calculoLitros.toFixed(2) //mudar essa linha!
}

/**
 * função que retorna a quantidade de km que o carro conseguirá percorrer
 * @param litros - quantidade de litros comprados
 * @return km - de autonomia do carro
 */
const calcAutonomia = litros => {
    // programe a autonomia
    var calculoAutonomia = litros / 20
    return calculoAutonomia.toFixed(3) //mude esse valor!!!
}

const respondeQuestao01 = (litros, autonomia) => {
    const listaResp = document.querySelector("#q01-result")
    const liResp = `<li>Você abastecerá ${litros}l</li>
                    <li>Sua autonomia é de ${autonomia}km</li>`
    listaResp.innerHTML = liResp
}

btn01.addEventListener("click", () => {
    const dinheiro = getDinheiro()
    const litros = calcLitrosCombustivel(dinheiro)
    const autonomia = calcAutonomia(litros)

    respondeQuestao01(litros, autonomia)
})

/*****************************************
 * QUESTÃO 02
 */

/**
 * Função que retorna o PESO digitado pelo usuário
 */
const getPeso = () => parseFloat(document.querySelector("#q02-peso").value) || 0

/**
 * Função que retorna a ALTURA digitada pelo usuário
 */
const getAltura = () => {
    // implemente a função 
    parseFloat(document.querySelector("#q02-altura").value)
}

const calcIMC = (peso, altura) => {
    return peso/(altura * altura) // programe aqui
}

const getFaixa = imc => {
    if (imc<18.5) return "Abaixo do peso"
    if (imc>=18.5 && imc<25) return "Peso normal"
    if (imc>=25 && imc<30) return "Levemente acima do peso"
    if (imc>=30 && imc<35) return "Obesidade grau I"
    if (imc>=35 && imc<40) return "Obesidade grau II (severa)"
    return "Obesidade grau III (mórbida)"
}

const respondeQuestao02 = (imc) => {
    const listaResp2 = document.querySelector("#q02-result")
    const liResp2 = `<li>Seu IMC é ${imc}</li>`
    listaResp2.innerHTML = liResp2
}

btn02.addEventListener("click", () => {
    const altura = document.querySelector("#q02-altura").value // programe aqui
    const peso = document.querySelector("#q02-peso").value//programe aqui

    const imc = calcIMC(peso,altura) // calcule o imc

    console.log(getFaixa(imc))

    respondeQuestao02(getFaixa(imc))
    //use getFaixa para imprimir a mensagem na tela

})

/*****************************************
 * QUESTÃO 03
 */

const lancadorDados = () => Math.ceil(Math.random()*6)

btn03.addEventListener("click", () => {
    let lances = [0,0,0,0,0,0] //6 faces do dado 
    console.log(lancadorDados())
    for(let i=0; i<1000000; i++){
        var ladoSort = lancadorDados()
        if(ladoSort == 0){
            i--
        } else {
            //contabilize os lances
            lances[ladoSort - 1]++  
        }
    }
    // a frequencia é total de #face/total de lancamentos
    const freq = (lado) => {
        var frequencia = lances[lado-1] / 1000000
        return frequencia.toFixed(3)
    }
    //atualize a tabela com seus valores
    // Lado 1
        document.querySelector(".face-ocorr-1").innerHTML = `${lances[0]}`
        document.querySelector(".face-freq-1").innerHTML = `${freq(1)*100}%`
    // Lado 2
        document.querySelector(".face-ocorr-2").innerHTML = `${lances[1]}`
        document.querySelector(".face-freq-2").innerHTML = `${freq(2)*100}%`
    // Lado 3
        document.querySelector(".face-ocorr-3").innerHTML = `${lances[2]}`
        document.querySelector(".face-freq-3").innerHTML = `${freq(3)*100}%`
    // Lado 4
        document.querySelector(".face-ocorr-4").innerHTML = `${lances[3]}`
        document.querySelector(".face-freq-4").innerHTML = `${freq(4)*100}%`
    // Lado 5
        document.querySelector(".face-ocorr-5").innerHTML = `${lances[4]}`
        document.querySelector(".face-freq-5").innerHTML = `${freq(5)*100}%`
    // Lado 6
        document.querySelector(".face-ocorr-6").innerHTML = `${lances[5]}`
        document.querySelector(".face-freq-6").innerHTML = `${freq(6)*100}%`

    }
)

/*****************************************
 * QUESTÃO 04
 */
const btnAddNome = document.querySelector("#q04-add")

//funcao que retorna o nome digitado
const getNome = () => document.querySelector("#q04-nome").value

const insereNome = nome => {
    const listaNomes = document.querySelector("#q04-nomes")
    //inserir nomes em listaNomes
}

const inverteNome = nome => {
    //programe inverte nome aqui
    var separa = nome.split("")
    var inverte = separa.reverse()
    var junta = inverte.join("")
    return junta
}

// insere nome digitado
btnAddNome.addEventListener("click", () => {
    const listaNomes = document.querySelector("#q04-nomes")
    if(getNome())
        listaNomes.innerHTML += `<li>${getNome()}</li>`
})

btn04.addEventListener("click", ()=>{
    const liNomesDigitados = document.querySelectorAll("#q04-nomes li")
    const listaInvertido = document.querySelector("#q04-nomes-invertidos")

    //para cada li de liNomesDigitados, inverta e insira em listaInvertido
    for (let i=0; i<liNomesDigitados.length; i++) {
        const nome = liNomesDigitados[i].textContent
        const nomeInvertido = inverteNome(nome)
        listaInvertido.innerHTML += `<li>${nomeInvertido}</li>`
    }
})

/*****************************************
 * QUESTÃO 05
 */
//funcao que retorna o nome digitado
const getPalavra = () => document.querySelector("#q05-palavra").value

const verificaPalindromo = (palavra) => {
    var invertido = inverteNome(palavra).toLowerCase()
    if(palavra.toLowerCase() == invertido){
        return true
    }
    //palavra[0] == palavra[palavra.length-1]
    //palavra[1] == palavra[palavra.length-2] 
    //palavra[2] == palavra[palavra.length-3] ...
    // até chegar no meio; se todas iguais, é palíndromo
    // caso contrário, não
    return false // programe aqui
}
btn05.addEventListener("click", () => {
    const palavra = getPalavra()
    const resp = document.querySelector("#q05-result")
    if(palavra)
        resp.innerHTML = `A palavra ${palavra} 
            ${(verificaPalindromo(palavra))?"é":"não é"} 
            um palíndromo`
})