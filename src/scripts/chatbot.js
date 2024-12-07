import { prompts } from "./prompts/index.js"
import { update_content } from "./document_modifier.js";

function make_context(text) {
    if (Document.cookies)
    return (
       `${prompts.human_rights}\n${prompts.rules}\n${prompts.question}\n${text}`
    )
}

/* CONSUME API */
const GEMINI_KEY = "AIzaSyDfnZB2Q8b4nYlT_75BA3Ie6MQ6Eunqyu4";

export async function get_text_in_gemini(text) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
        contents: [{
            parts: [
                { text: make_context(text) }
            ]
        }]
    })

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_KEY}`, {
        method: "POST",
        headers,
        body,
        redirect: "follow"
    })
    const payload = await response.json();
    
    payload.candidates.forEach(candidate => {
        candidate.content.parts.forEach(part => {
            update_content(part.text);
        })
    });
}