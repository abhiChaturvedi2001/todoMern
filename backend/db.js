const mongoose = require('mongoose');
const connectionURL = `mongodb://localhost:27017/taskManager`;
mongoose.connect(connectionURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connection successful')
})
db.on('disconnected', () => {
    console.log('disconnected successful')
})
db.on('error', () => {
    console.log('error connection')
})

module.exports = db;