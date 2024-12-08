import { INPUT_AREA } from "./document_modifier.js";
import { get_text_in_gemini } from "./chatbot.js";

const FOOTER = document.querySelector("#footer");
const CLOSE_RESUMES = document.querySelector("#close-resumes");
const OPEN_RESUMES = document.querySelector("#open-resumes");
const ASIDE = document.querySelector("#aside");
const RESUME_ITEMS = document.querySelectorAll(".resume-item");

/* CHAT EVENT */
INPUT_AREA.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = INPUT_AREA.querySelector("input");
    get_text_in_gemini(input.value);
    input.value = "";
    INPUT_AREA.dataset.type = "voice"
})

const VOICE_TO_CHAT = document.querySelector("#voice-to-chat");
VOICE_TO_CHAT.addEventListener("click", () => {
    FOOTER.dataset.type = "chat";
})

const CHAT_TO_VOICE = document.querySelector("#chat-to-voice");
CHAT_TO_VOICE.addEventListener("click", () => {
    FOOTER.dataset.type = "voice";
})

CLOSE_RESUMES.addEventListener("click",() => {
    ASIDE.dataset.status = "closed";
})

OPEN_RESUMES.addEventListener("click",() => {
    ASIDE.dataset.status = "opened";
})

RESUME_ITEMS.forEach((RESUME_ITEM) => {
    RESUME_ITEM.addEventListener("click", () => {
        window.location.href = RESUME_ITEM.dataset.url
    })
})