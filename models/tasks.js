const mongoose = require('mongoose');
const {model} = require("mongoose");

const schema = new mongoose.Schema(
    {
        task: String
    }
);

module.exports = mongoose.model('Task', schema);