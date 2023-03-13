const sqlite = require("../index")
const logger = require('nexo-npm-node-logger')

sqlite.setConnection({ filename: './test.sqlite3'})
sqlite.onConnected(async () => {
    logger.i("Connected to the database");
});
sqlite.onFailure((err:any) => {
    logger.e("Unable to connect to the database", err)
});
sqlite.initialize()
sqlite.client('test_tb').select('*')
.then((result:any)=> console.log(result))
.catch((error:any) =>  console.log(error))
.finally(()=> process.exit())