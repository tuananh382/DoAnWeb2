const mongoose = require('mongoose');

module.exports = async function(app) {
    const uris = require('../config/key.config').MongoLocal;
    
    const mongooseConfig = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 100,
        useCreateIndex: true
    };

     mongoose.connect(uris, mongooseConfig, (res)=>{
        console.log('Database conected', res);
    });
}