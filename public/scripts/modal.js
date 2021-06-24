// Escutar a modal
export default function Modal(){
    
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    const modalWrapper = document.querySelector('.modal-wrapper')
    
    function open(){
        // Atribuir a clase active
        modalWrapper.classList.add('active')
    }

    function close(){
        // Remover a clase active
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}