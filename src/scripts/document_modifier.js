/* DOCUMENT MODIFIER */
export const CONTENT = document.querySelector("#content");
export const INPUT_AREA = document.querySelector("#input_area");

export function update_content(text) {
    const tmp = CONTENT.innerHTML;
    if (text) {
        if (text.includes(">") == false)
            text = `<p>${text}</p>`
        if (tmp == "")
            CONTENT.innerHTML = `${text}`;
        else
            CONTENT.innerHTML = `${tmp}<br>${text}`;
    }
    CONTENT.scrollTo(0, CONTENT.scrollTop + CONTENT.scrollHeight);
}

INPUT_AREA.querySelector("input").addEventListener("input", (event) => {
    if (event.target.value != "")
        INPUT_AREA.dataset.type = "chat"
    else
    INPUT_AREA.dataset.type = "voice"
})

export function render_context() {
    let context = [];
    if (localStorage.getItem("context"))
        context = JSON.parse(localStorage.getItem("context"));
    
    CONTENT.innerHTML = "";
    context.forEach((content, index) => {
        if (index > 2)
            update_content(content.parts[0].text)
    })
}