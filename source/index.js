/**
 * Arquivo principal
 * @author Kayky Casagrande
 * @date 04/12/2020 
 */

const express = require('express');

// Criar uma pasta config e adiconar as configurações em um arquivo api_config.json
const bodyParser = require('body-parser');
const api_config = require('./config/api_config.json');


const app = express();



app.listen(api_config.port, () => {

    console.log(`http://${api_config.uri}:${api_config.port}`);
});