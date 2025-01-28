import chalk from "chalk";

const promptSchemaQrcode = [
{
    name: "link",
    description: chalk.blue("Insira o link para gerar o QRCode"),
},
{
    name: "type",
    desccription: chalk.blue("Escolha entre o tipo (1 - Normal ou (2 - Terminal"),
    pattern: /^[1-2]+$/,
    message: "Por favor, escolha 1 ou 2.",
    required: true,
}

];

export default promptSchemaQrcode;