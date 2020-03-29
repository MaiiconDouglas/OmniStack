const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cros({
    //origin: 'http://meuapp.com' //caso queira colocar em producao e restringir quem pode acessar a aplicacao
}));
app.use(express.json());
app.use(routes);

app.listen(3333);