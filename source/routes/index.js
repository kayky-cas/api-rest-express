/**
 * Inicia a rota de principal '/api'
 * @author Kayky Casagrande
 * @date 04/12/2020
 */

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const get = require('./get.js')

router.use('/produtos', get);

router.get('/', (request, response) => {
    
    response.json({message: "Essa é uma API feita utilizando express e mongoDB"});
});

module.exports = router;