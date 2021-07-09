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
event.target.style.backgroundColor ='rgb(128, 128, 128)'
}
let ol = document.querySelector('#lista-tarefas')
ol.addEventListener('click', mudarCorLis)