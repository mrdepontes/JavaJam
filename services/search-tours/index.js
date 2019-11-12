require('dotenv').config() 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url =  process.env.MONGODB;
const dbName = process.env.DATABASENAME;

const findDocuments = function (db, callback, resolve ){
   const collection = db.collection('tours');
    collection.find().toArray( (err, documents) => {
        resolve(documents)
        callback;
    }) 
}

async function getDocument(){
    // Use connect method to connect to the server
    return new Promise(resolve => {
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            const db = client.db(dbName);
            findDocuments(db, () => {
                db.close();
            }, resolve)
        });
    });
}

module.exports = getDocument