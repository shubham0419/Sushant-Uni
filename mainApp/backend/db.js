const mongoose = require('mongoose');

const connectToDB = async ()=>{
  mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('dB Connected!'));
}

module.exports = connectToDB;