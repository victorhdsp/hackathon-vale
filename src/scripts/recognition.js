import { get_text_in_gemini } from "./chatbot.js";

const VOICE = document.querySelector("#voice");
class speechApi {
    constructor () {
        const SpeechToText = window.SpeechRecognition ||
                                window.webkitSpeechRecognition

        if (SpeechToText) {
            this.speechApi = new SpeechToText()
            this.speechApi.continuous = true;
            this.speechApi.lang = "pt-BR";
            this.speechApi.onresult = e => {
                const index = e.resultIndex;
                const transcript = e.results[index][0].transcript;
                get_text_in_gemini(transcript);
            }
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
let sec;

function start() {
    window.speechSynthesis.cancel();
    let time = 0;
    speech.start();
    VOICE.dataset.touched = "true";
    VOICE.dataset.time = time;
    sec = setInterval(() => {
        time++;
        VOICE.dataset.time = time;
    }, 1000)
}

function stop() {
    speech.stop();
    clearInterval(sec);
    VOICE.dataset.time = 0;
    VOICE.dataset.touched = "false";
}

VOICE.addEventListener("touchstart", start)
VOICE.addEventListener("touchend", stop)
VOICE.addEventListener("mousedown", start)
VOICE.addEventListener("mouseup", stop)
