const mongoose = require('mongoose');

const taskManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("todos", taskManagerSchema)