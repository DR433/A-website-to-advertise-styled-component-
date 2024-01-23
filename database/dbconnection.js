import('dotenv').config();
const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(`${process.env.MONGO_DB_URL}`).then(() => {
        console.log('You are now connected to the Database');
    });
}

module.exports = connectToDb;