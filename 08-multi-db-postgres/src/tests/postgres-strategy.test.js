const assert = require("assert");
const Postgres = require("../db/strategies/postgres");
const Context = require("../db/strategies/base/context-strategy");

const context = new Context(new Postgres());
const MOCK_HERO_CREATE = {
  nome: "Gaviao Negro",
  poder: "Flechas",
};

describe("Postgres Strategy", () => {
  before(async () => {
    await context.connect();
  });

  it("PostgresSQL Connection", async () => {
    const result = await context.isConnected();

    assert.equal(result, true);
  });
  it("create", async () => {
    const result = context.create(MOCK_HERO_CREATE);
    console.log('result: '+result)

    assert.deepEqual(result, MOCK_HERO_CREATE);
  });
});
