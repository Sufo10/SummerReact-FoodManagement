const mongooseCon = require('mongoose');

const dbConnection = async (URI) => {
    try {
        mongooseCon.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }

};

module.exports = dbConnection;