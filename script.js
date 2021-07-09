function createButton(textInButton) {
  let paiButton = document.querySelector('#buttonInput')
  let button = document.createElement('button')
  let idButton = 'criar-tarefa'
  button.innerHTML = textInButton
  button.id = idButton
  paiButton.appendChild(button)
}
createButton('Tarefa')

let valorInput
let input = document.querySelector("#texto-tarefa")
let buttonInput = document.querySelector('#criar-tarefa')

function inputText(event) {
valorInput = event.target.value
}

input.addEventListener('input', inputText)

function createLiTarefa(event) {
  let paiLi = document.querySelector("#lista-tarefas")
  let li = document.createElement('li')
  li.classList.add('lista')
  li.innerHTML = valorInput
  paiLi.appendChild(li)
  input.value =''
}

buttonInput.addEventListener('click',createLiTarefa)

function mudarCorLis(event){
  let lis= document.querySelectorAll('li')
  for (let index of lis) {
    index.style.backgroundColor = '#aaaaaa'
  }
  event.target.style.backgroundColor ='#808080'
}

let ol = document.querySelector('#lista-tarefas')
ol.addEventListener('click', mudarCorLis)

function riscarTarefa (event) {
  event.target.classList.toggle('completed')
}
ol.addEventListener('dblclick', riscarTarefa)

function clearButton(textButton){
  let buttonPai =document.querySelector('#clearButton')
  let clearButton = document.createElement('button')
  let idButton = 'remover-finalizados'
  clearButton.id = idButton
  clearButton.innerHTML = textButton
  buttonPai.appendChild(clearButton)
}

clearButton("Apagar Lista")


function apagaLista () {
  ol.innerHTML=''
}

let buttonApagar = document.querySelector('#remover-finalizados')
buttonApagar.addEventListener('click', apagaLista)