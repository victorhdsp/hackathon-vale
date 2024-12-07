/* CONSUME API */
const GEMINI_KEY = "AIzaSyDfnZB2Q8b4nYlT_75BA3Ie6MQ6Eunqyu4";

async function get_text_in_gemini(text) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
        contents: [{
            parts: [{
                text
            }]
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

/* DOCUMENT MODIFIER */
const CONTENT = document.querySelector("#content");
const INPUT_AREA = document.querySelector("#input_area");

function update_content(text) {
    const tmp = CONTENT.innerHTML;
    CONTENT.innerHTML = `${tmp}<br>${text}`;
    CONTENT.scrollTo(0, CONTENT.scrollTop + CONTENT.scrollHeight);
}

INPUT_AREA.querySelector("input").addEventListener("input", (event) => {
    if (event.target.value != "")
        INPUT_AREA.dataset.type = "chat"
    else
    INPUT_AREA.dataset.type = "voice"
})

/* CHAT EVENT */

const CHAT = document.querySelector("#chat");

CHAT.addEventListener("click", (_) => {
    const input = INPUT_AREA.querySelector("input");
    update_content(input.value);
})