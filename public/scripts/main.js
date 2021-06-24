import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Escutar cuando for clicado o delete
const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, true))
})

// Escutar cuando for clicado o check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

// O que acontece ao clicar
function handleClick(event, check = true) {

    // Para deixar de adicionar os # cada vez que entra na modal
    event.preventDefault()

    const text = check ? "Excluir" : "Marcar como lida"
    const slug = check ? "delete" : "check"

    // Obter os dados para poder deletar/marcar como lida a pergunta certa
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    // Trocar a cor do button
    check ? modalButton.classList.add("red") : modalButton.classList.remove("red")
        
    // Abrir a modal
    modal.open()
}