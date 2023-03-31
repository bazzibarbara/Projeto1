/* eslint-disable no-undef */
const app = require('./config/expressConfig');
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, console.log('Hello API'));