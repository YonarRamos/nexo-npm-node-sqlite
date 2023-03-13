const knex = require('knex')

let client:any;

let url = "";
function setUrl(_url:any) {
    url = _url;
}

let onConnected:any;
function setOnConnected(callback:any) {
    onConnected = callback;
}

let onFailure:any;
function setOnFailure(callback:any) {
    onFailure = callback;
};

let connection:object
function setConnection (values:object){
    connection = values
}

let migrationsUrl:string
function setMigrationsUrl (url:string){
    migrationsUrl = url
}

let seedsUrl:string
function setSeedssUrl (url:string){
    seedsUrl = url
}

function initialize(this: typeof client) {
    if (!connection) throw new Error("connection not defined")

    const config = {
        client: 'sqlite3',
        connection: {...connection},
        migrations: { directory: migrationsUrl ?? '.db/migrations' },
        seeds: { directory: seedsUrl ?? '.db/migrations' },
        useNullAsDefault: true,
    }
    
    this.client = knex(config)

    this.client.client.config
    ? onConnected?.()
    : onFailure?.()
}

module.exports = {
    setConnection,
    setMigrationsUrl,
    setSeedssUrl,
    onConnected: setOnConnected,
    onFailure: setOnFailure,
    initialize,
    client
}
