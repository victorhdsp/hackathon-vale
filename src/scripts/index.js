import "./chatbot.js";
import { render_context, update_content, Models } from "./document_modifier.js";
import "./events.js";
import "./recognition.js";
import { chat_voice } from "./synthesis.js"

if (localStorage.getItem("context") == null)
{
    const text = "Olá! Eu sou a Val, e irei acompanha-lo durante o seu treinamento sobre Direitos Humanos. Estou aqui para ajudar.";
    const content = { role:"model", parts: [{ text: `${text}  😊` }] };
    update_content(Models(content));
    chat_voice(text);
}
else
    render_context();

localStorage.removeItem("context")