
const sqlite = require("../index.js")
const logger = require('nexo-npm-node-logger')

sqlite.url('./src/tests/test.sqlite3')
sqlite.onConnected(async () => {
    logger.i("Connected to the database");
});
sqlite.onFailure((err) => {
    logger.e("Unable to connect to the database", err)
});
sqlite.initialize()
sqlite.client('test_tb').select('*')
.then((result)=> console.log(result))
.catch(error =>  console.log(error))
.finally(()=> process.exit())