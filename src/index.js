const knex = require('knex')

let client;

let url = "";
function setUrl(_url) {
    url = _url;
}

let onConnected;
function setOnConnected(callback) {
    onConnected = callback;
}

let onFailure;
function setOnFailure(callback) {
    onFailure = callback;
};

function initialize()
{
    if (!url) throw new Error("url not defined");

    const config = {
            client: 'sqlite3',
            connection: {
                filename: url
            },
         useNullAsDefault: true,
        }
    
    this.client = knex(config)

    this.client.client.config
    ? onConnected?.()
    : onFailure?.()
}

module.exports = {
    url: setUrl,
    onConnected: setOnConnected,
    onFailure: setOnFailure,
    initialize,
    client
}
