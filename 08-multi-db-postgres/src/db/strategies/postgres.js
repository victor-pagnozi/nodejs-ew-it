const ICrud = require("./interfaces/interface-crud");
const Sequelize = require("sequelize");

class Postgres extends ICrud {
  constructor() {
    super();
    this._driver = null;
    this._herois = null;
  }

  async isConnected() {
    try {
      await this._driver.authenticate();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async create(item) {
    const { dataValues } = await this._herois.create(item);

    return dataValues;
  }

  async defineModel() {
    this._herois = this._driver.define(
      "heroes",
      {
        id: {
          type: Sequelize.INTEGER,
          required: true,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          required: true,
        },
        poder: {
          type: Sequelize.STRING,
          required: true,
        },
      },
      {
        tableName: "TB_HEROIS",
        freezeTableName: false,
        timeStamps: false,
      }
    );

    await this._herois.sync();
  }

  async connect() {
    this._driver = new Sequelize("heroes", "victor", "victor", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false,
    });

    await this.defineModel();
  }
}

module.exports = Postgres;
