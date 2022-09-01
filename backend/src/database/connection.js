const mongooseCon = require('mongoose');

const dbConnection = URI => {
  mongooseCon
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to DB');
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = dbConnection;
