const pgp = require("pg-promise")();
const db = pgp("postgres://postgres:6362@localhost:5432/online_flower_shop");

module.exports = db;