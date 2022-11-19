const ICrud = require("./interfaces/interface-crud");

class Postgres extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log("Item foi salvo em Postgres");
  }
}

module.exports = Postgres;
