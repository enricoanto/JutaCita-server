const { MongoClient } = require("mongodb");
const dataBaseUrl = "mongodb://localhost:27017";

const client = new MongoClient(dataBaseUrl, { useUnifiedTopology: true });
client.connect();

const db = client.db("application");

module.exports = db