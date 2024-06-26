const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017'; // Changed to IPv4 address
const client = new MongoClient(url);

// Database Name
const dbName = 'yt';

async function conn() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);
    return db.collection('video');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

module.exports = conn;
