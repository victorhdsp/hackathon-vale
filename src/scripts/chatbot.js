import { prompts } from "./prompts/index.js"
import { render_context } from "./document_modifier.js";

function make_context(text) {
    let context = [];
    if (localStorage.getItem("context"))
        context = JSON.parse(localStorage.getItem("context"));
    if (context.length == 0)
        context = [
            { role:"user", parts: [{ text: prompts.human_rights }] },
            { role:"user", parts: [{ text: prompts.rules }] },
            { role:"user", parts: [{ text: prompts.question }] }
        ]

    context.push({ role:"user", parts: [{ text: `<p>${text}</p>` }] })
    localStorage.setItem("context", JSON.stringify(context));
    return context;
}

/* CONSUME API */
const GEMINI_KEY = "AIzaSyDfnZB2Q8b4nYlT_75BA3Ie6MQ6Eunqyu4";

export async function get_text_in_gemini(text) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
        contents: make_context(text)
    })

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_KEY}`, {
        method: "POST",
        headers,
        body,
        redirect: "follow"
    })
    const payload = await response.json();
    const context = JSON.parse(localStorage.getItem("context"));
    
    payload.candidates.forEach(candidate => {
        context.push(candidate.content);
    });
    localStorage.setItem("context", JSON.stringify(context));
    render_context()
}