const words = document.querySelector(".words")
let currentParagraph

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.interimResults = true

createParagraph()

recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("")

    currentParagraph.textContent = transcript
    if (e.results[0].isFinal) {
        createParagraph()
    }
})

recognition.addEventListener("end", recognition.start)

recognition.start()

function createParagraph(text) {
    currentParagraph = document.createElement("p")
    words.appendChild(currentParagraph)
}