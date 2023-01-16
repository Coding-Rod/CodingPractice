const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

routerApi(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
