const testsym = require("./test");

const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol.for("test");
const log = console.log;

const obj = {
  [Symbol("Name")]: "Harsh",
  [sym3]: null,
  lastName: "Rastogi",
};

for (let key of Object.getOwnPropertySymbols(obj)) log(key);

log(obj);
