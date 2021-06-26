document.querySelector("#room-id").addEventListener("click", () => {
    let copiedText = document.getElementById('room-id').getAttribute("data-id") 
    navigator.clipboard.writeText(copiedText)
})