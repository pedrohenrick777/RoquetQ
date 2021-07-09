import  Modal  from './modal.js'

const modal = Modal()
const checkButtons = document.querySelectorAll('.actions a.check')

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

checkButtons.forEach(button => {
    button.addEventListener("click", handleclick)
})

const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleclick(event, false))
})

function handleclick(event, check = true){
    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'
    const form = document.querySelector('.modal form')
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id
    
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}