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

function initialize(this: typeof client)
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
