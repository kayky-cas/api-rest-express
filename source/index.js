/**
 * Arquivo principal
 * @author Kayky Casagrande
 * @date 04/12/2020 
 */

const express = require('express');
const bodyParser = require('body-parser');

const api_config = require('./config/api.json');


const app = express();
const router = require('./routes');

app.use('/api', router);

app.listen(api_config.port, () => {

    console.log(`http://${api_config.uri}:${api_config.port}`);
});