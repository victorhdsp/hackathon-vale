import { INPUT_AREA } from "./document_modifier.js";
import { get_text_in_gemini } from "./chatbot.js";

/* CHAT EVENT */
const CHAT = document.querySelector("#chat");

CHAT.addEventListener("click", (_) => {
    const input = INPUT_AREA.querySelector("input");
    get_text_in_gemini(input.value);
    input.value = "";
})