import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.blue(
            "Escolha a ferramenta (1 -  QRCODE ou ( 2 - PASSWORD"
        ),
        pattern: /^[1-2]+$/,
        message: "Por favor, escolha 1 ou 2.",
        required: true, 
    },
];

export default promptSchemaMain;