/* DOCUMENT MODIFIER */
const MAIN = document.querySelector("#main")
export const CONTENT = document.querySelector("#content");
export const INPUT_AREA = document.querySelector("#input_area");

function Models(content) {
    //{ role:"user", parts: [{ text: prompts.human_rights }] },
    if (content.role == "user")
        return (
            `<div data-role="user">
                <div class="text">
                    ${content.parts[0].text}
                </div>
            </div>`
        )
    else if (content.role == "model")
        return (
            `<div data-role="model">
                <div class="logo">
                    <img src="./src/assets/icons/logo.svg"/>
                </div>
                <div class="text">
                    ${content.parts[0].text}
                </div>
            </div>`
        )
}

export function update_content(html) {
    const tmp = CONTENT.innerHTML;
    CONTENT.innerHTML = `${tmp} ${html}`;
    MAIN.scrollTo(0, CONTENT.scrollTop + CONTENT.scrollHeight);
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
            update_content(Models(content))
    })
}