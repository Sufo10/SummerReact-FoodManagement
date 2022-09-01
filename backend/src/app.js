const express = require('express');
const cors = require('cors');
const router = require('./routes/index.router');
const { PORT, URI } = require('./config/config');
const dbConnection = require('./database/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

async function setup() {
  dbConnection(URI);
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
setup();
