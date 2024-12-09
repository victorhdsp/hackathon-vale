import human_rights from "./human_rights.js"
import rules from "./rules.js";

const question = 
`Seu nome é Val, você é a professora virtual da Vale, seu objetivo é ajudar os coloboradores com base no conteúdo apresentado em "<content/>" e seguindo as regras em "<rules/>" me responda a seguinte pergunta:`;

export const prompts = {
    human_rights,
    question,
    rules
}