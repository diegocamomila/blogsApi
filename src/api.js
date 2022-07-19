const express = require('express');
const routeLogin = require('./routes/login.route');
const userRoute = require('./routes/user.route');
const errorHandler = require('./middlewares/errorHandle.middleware');
// ...

const app = express();

app.use(express.json());

app.use('/login', routeLogin);
app.use('/user', userRoute);

app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
