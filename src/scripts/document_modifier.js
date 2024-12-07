/* DOCUMENT MODIFIER */
export const CONTENT = document.querySelector("#content");
export const INPUT_AREA = document.querySelector("#input_area");

export function update_content(text) {
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
