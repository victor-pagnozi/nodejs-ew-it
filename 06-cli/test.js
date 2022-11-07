const { deepEqual, ok } = require("assert");

const DEFAULT_ITEM_REGISTER = { name: "Flash", power: "Speed", id: 1 };

const database = require("./database");

describe("Suit manipulation heroes", () => {
    it("must list heroes using files", async () => {
        const expected = DEFAULT_ITEM_REGISTER;
        const [result] = await database.list(expected.id);

        deepEqual(result, expected);
    });
    it("must create a hero using files", async () => {
        const expected = DEFAULT_ITEM_REGISTER;

        deepEqual(null, expected);
    });
});
