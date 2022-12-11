const Sequelize = require("sequelize");

const driver = new Sequelize("heroes", "victor", "victor", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
});

async function main() {
  const Heroes = driver.define(
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

  await Heroes.sync();

  // await Heroes.create({
  //   nome: "Lanterna Verde",
  //   poder: "Anel",
  // });

  const result = await Heroes.findAll({ raw: true });
  console.log(result);
}

main();
