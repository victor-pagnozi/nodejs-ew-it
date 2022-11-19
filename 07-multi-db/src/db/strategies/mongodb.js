const ICrud = require("./interfaces/interface-crud");

class MongoDB extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log("Item foi salvo em MongoDB");
  }
}

module.exports = MongoDB;
