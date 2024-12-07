import human_rights from "./human_rights.js"
import rules from "./rules.js";

const question = 
`Com base no conteúdo apresentado em "<content/>" e seguindo as regras em "<rules/>" me responda a seguinte pergunta:`;

export const prompts = {
    human_rights,
    question,
    rules
}