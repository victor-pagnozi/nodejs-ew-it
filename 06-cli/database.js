const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
    constructor() {
        this.FILE_NAME = "heroes.json";
    }

    async getDataFile() {
        const file = await readFileAsync(this.FILE_NAME, "utf8");
        return JSON.parse(file.toString());
    }

    async createFile(input) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(input));
        return true;
    }

    async create(hero) {
        const data = await this.getDataFile();
        const id = hero.id <= 2 ? hero.id : Date.now();
    }

    async list(id) {
        const data = await this.getDataFile();
        const filteredData = data.filter((item) =>
            id ? item.id === id : true
        );
        return filteredData;
    }
}

module.exports = new Database();
