const mongoose = require('mongoose');
const connectionURL = process.env.MONGO_URI;
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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