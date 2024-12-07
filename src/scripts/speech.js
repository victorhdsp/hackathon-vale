import { get_text_in_gemini } from "./chatbot.js";

const VOICE = document.querySelector("#voice");
class speechApi {
    constructor () {
        const SpeechToText = window.SpeechRecognition ||
                                window.webkitSpeechRecognition

        this.speechApi = new SpeechToText()
        this.speechApi.continuous = true;
        this.speechApi.lang = "pt-BR";
        this.speechApi.onresult = e => {
            const index = e.resultIndex;
            const transcript = e.results[index][0].transcript;
            get_text_in_gemini(transcript);
        }
    }

    start() {
        this.speechApi.start();
    }

    stop() {
        this.speechApi.stop();
    }
}

const speech = new speechApi();

VOICE.addEventListener("touchstart", () => {
    speech.start();
})

VOICE.addEventListener("touchend", () => {
    speech.stop();
})

VOICE.addEventListener("mousedown", () => {
    speech.start();
})

VOICE.addEventListener("mouseup", () => {
    speech.stop();
})
