const { Command } = require("commander");
const Database = require("./database");
const Heroi = require("./heroi");

async function main() {
    const commander = new Command();

    commander
        .version("v1")
        .option("-n, --nome [value]", "Nome do Herói")
        .option("-p, --poder [value]", "Poder do Herói")
        .option("-i, --id [value]", "Id do Herói")

        .option("-c, --cadastrar", "Cadastrar um Herói")
        .option("-l, --listar", "Listar um Herói")
        .option("-r, --remover", "Remove um Herói pelo id")
        .option("-a, --atualizar [value]", "Atualiza um Herói pelo id")

        .parse(process.argv);

    const options = commander.opts();
    const heroi = new Heroi(options);

    try {
        if (options.cadastrar) {
            delete heroi.id;

            const resultado = await Database.cadastrar(heroi);
            if (!resultado) {
                console.error("Não foi possível cadastrar um herói");
                return;
            }
            console.log("Herói cadastrado com sucesso");
        }

        if (options.listar) {
            const resultado = await Database.listar();
            console.log(resultado);
            return;
        }

        if (options.remover) {
            const resultado = await Database.remover(heroi.id);
            if (!resultado) {
                console.error("Não foi possível Remover um heroi");
                return;
            }
            console.log("Herói removido com sucesso");

            return;
        }

        if (options.atualizar) {
            const idParaAtualizar = parseInt(options.atualizar);
            delete heroi.id;

            const dado = JSON.stringify(heroi);
            const heroiAtualizar = JSON.parse(dado);

            const resultado = await Database.atualizar(
                idParaAtualizar,
                heroiAtualizar
            );

            if (!resultado) {
                console.error("Não foi possível Atualizar");
                return;
            }

            console.log("Herói atualizado com sucesso");
        }
    } catch (err) {
        console.error(err);
    }
}

main();
