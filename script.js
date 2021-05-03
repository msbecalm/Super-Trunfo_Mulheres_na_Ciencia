var cartaMarieCurie = {
    nome: "Marie Curie",
    imagem: "https://i.pinimg.com/originals/49/65/3f/49653f848474cabb12170e71277a0eb3.jpg",
    atributos: {
        matematica: 65,
        fisica: 85,
        quimica: 98
    }
}

var cartaAdaLovelace = {
    nome: "Ada Lovelace",
    imagem: "https://images.takeshape.io/fd194db7-7b25-4b5a-8cc7-da7f31fab475/dev/5b06851a-b35d-4334-987b-ecdb7b5b0ce3/Massive_Lovelace_deck.jpg?auto=compress%2Cformat",
    atributos: {
        matematica: 95,
        fisica: 65,
        quimica: 60
    }
}

var cartaRosalind = {
    nome: "Rosalind Driver",
    imagem: "https://lh4.googleusercontent.com/NTcf9pWX27MhTyDqhWQDSr09usSy2OVDQCJlXRn4CbhRQiPDaBvKf4Lo8Up0RkYbRTxLJir7wgrmdStzP4Ff_sreDMRNQBWc92AvT9cSBC6DsqsUogVXIzWRD5DyhssJHir4Rq94",
    atributos: {
        matematica: 60,
        fisica: 89,
        quimica: 90
    }
}

var cartaKatherine = {
    nome: "Katherine Johnson",
    imagem: "https://images.takeshape.io/fd194db7-7b25-4b5a-8cc7-da7f31fab475/dev/8fa418cf-43e4-4d3b-b890-48fd55be7032/Massive_Johnson_deck.jpg?auto=compress%2Cformat",
    atributos: {
        matematica: 97,
        fisica: 90,
        quimica: 65
    }
}

var cartaChienShiung = {
    nome: "Chien-Shiung Wu",
    imagem: "https://images.takeshape.io/fd194db7-7b25-4b5a-8cc7-da7f31fab475/dev/9d1b1820-ebb2-4115-a145-7294d18900f6/Massive_Wu_deck.jpg?auto=compress%2Cformat",
    atributos: {
        matematica: 89,
        fisica: 95,
        quimica: 70
    }
}

var cartaAlice = {
    nome: "Alice Ball",
    imagem: "https://64.media.tumblr.com/a7ef13064bd0e9a61a80937f5ffc193e/tumblr_oa4t7r3F4C1src5rlo1_1280.jpg",
    atributos: {
        matematica: 65,
        fisica: 70,
        quimica: 95
    }
}

var cartaMargaret = {
    nome: "Margaret Hamilton",
    imagem: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ffa66e90434479.5e172c89cf0e3.jpg",
    atributos: {
        matematica: 98,
        fisica: 83,
        quimica: 55
    }
}

var cartaSuperTrunfo = {
    nome: "Super Trunfo",
    imagem: "https://i.pinimg.com/originals/3f/fe/0c/3ffe0c1b8cbfcca4a03d6d633d32f008.jpg",
    atributos: {
        matematica: 100,
        fisica: 100,
        quimica: 100
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMarieCurie, cartaAdaLovelace, cartaRosalind, cartaKatherine, cartaChienShiung, cartaAlice, cartaMargaret, cartaSuperTrunfo]
//            0           1           2          3         4            5            6           7     

var pontosJogador = 0
var pontosMaquina = 0
var quantidadeCartasJogador = 0
var quantidadeCartasMaquina = 0

atualizaPlacar();
atualizaQuantidadeDeCartas()

function atualizaPlacar (){
  var divPlacar = document.getElementById('placar')
  var cartasParaCadaJogador = "Quantidade de cartas do Jogador: " + quantidadeCartasJogador + "/" + "Quantidade de Cartas da Máquina: " + quantidadeCartasMaquina
  
  divPlacar.innerHTML = cartasParaCadaJogador
  
}

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
  
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
  
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++;
        quantidadeCartasJogador += 2
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
        quantidadeCartasMaquina+= 2
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if(cartas.length == 0){
      alert("Fim de Jogo");
      atualizaQuantidadeDeCartas();
      if(pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      } else if (pontosMaquina > pontosJogador) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
   
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
   
}


function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}