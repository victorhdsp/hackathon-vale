import { INPUT_AREA } from "./document_modifier.js";
import { get_text_in_gemini } from "./chatbot.js";

const FOOTER = document.querySelector("#footer");

/* CHAT EVENT */
INPUT_AREA.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = INPUT_AREA.querySelector("input");
    get_text_in_gemini(input.value);
    input.value = "";
})

const VOICE_TO_CHAT = document.querySelector("#voice-to-chat");
VOICE_TO_CHAT.addEventListener("click", () => {
    FOOTER.dataset.type = "chat";
})

const CHAT_TO_VOICE = document.querySelector("#chat-to-voice");
CHAT_TO_VOICE.addEventListener("click", () => {
    FOOTER.dataset.type = "voice";
})