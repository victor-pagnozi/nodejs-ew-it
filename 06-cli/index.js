const Commander = require("commander");
const Database = require("database");

async function main() {
    Commander.version("v1")
        .option("-n, --nome [value]", "Nome do Herói")
        .option("-p, --poder [value", "Poder do Herói")

        .option('-c, --cadastrar', "Cadastrar um Herói")
         
        .parse(process.argv);

    try {
      if(Commander.cadastrar) {
        const resultado = await Database.cadastrar()
      }
    } catch (err) {
        console.error(err);
    }
}

main();
