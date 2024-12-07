import "./chatbot.js";
import { render_context, update_content } from "./document_modifier.js";
import "./events.js";
import "./speech.js";

if (localStorage.getItem("context") == null)
    update_content("Olá! Eu sou a Val, e irei acompanha-lo durante o seu treinamento sobre Direitos Humanos. Estou aqui para ajudar. 😊")
else
    render_context();