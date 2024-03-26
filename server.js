const express = require('express');
const routes = require('./routes');
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();
const PORT = 3000;
require('dotenv').config()

// enable cors for all requests
app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});

mongoose.connect(process.env.DB_CONNECTION,  {dbName: process.env.DB_NAME});
const db = mongoose.connection;
db.on('error', err => {
    console.log(err);
})
db.once('open', () => {
    console.log('connection to DB ...')
})