const express = require('express');
const route = require('./routes/login.route');
const errorHandler = require('./middlewares/errorHandle.middleware');
// ...

const app = express();

app.use(express.json());

app.use('/login', route);

app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
