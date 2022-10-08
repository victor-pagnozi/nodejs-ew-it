const service = require("./service");
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }

    return novoArrayMapeado;
};

async function main() {
    try {
        const results = await service.obterPessoas("a");
        const names = [];

        console.time("foreach")
        results.results.forEach((item) => {
            names.push(item.name);
        });
        console.timeEnd("foreach")

        console.time('map')
        const namesMapped = results.results.map((pessoa) => pessoa.name);
        console.timeEnd('map')

        // console.log(namesMapped);

        console.time("meumap");
        const namesMeuMap = results.results.meuMap(function (pessoa, indice) {
            return `[${indice}]${pessoa.name}`;
        });
        console.timeEnd("meumap");
        // console.log(namesMeuMap);
    } catch (err) {
        console.error("Erro", err);
    }
}

main();
