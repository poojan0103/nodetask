
// const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
//connection url 
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Database name
const database = 'test'


async function dbconnect(){
    let result = await client.connect();
    console.log('Connected to server sucessfully');
   let db= result.db(database)
   console.log('connect to database Sucessfully');
  return db.collection('user')

}
module.exports = dbconnect;