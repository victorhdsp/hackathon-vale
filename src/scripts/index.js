import "./chatbot.js";
import { render_context, update_content } from "./document_modifier.js";
import "./events.js";
import "./recognition.js";
import { chat_voice } from "./synthesis.js"

if (localStorage.getItem("context") == null)
{
    const text = "Olá! Eu sou a Val, e irei acompanha-lo durante o seu treinamento sobre Direitos Humanos. Estou aqui para ajudar.";
    update_content(`${text}  😊`);
    chat_voice(text);
}
else
    render_context();

window.navigator.vibrate(100);