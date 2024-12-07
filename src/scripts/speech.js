import { update_content } from "./document_modifier.js";

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
            update_content(transcript);
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
VOICE.addEventListener("click", () => {
    speech.start();
    VOICE.disabled = true;
    console.log("test")

    setTimeout(() => {
        speech.stop();
        VOICE.disabled = false;
    }, 5000);
})