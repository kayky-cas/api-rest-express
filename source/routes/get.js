/**
 * Inicia a rota de get
 * @author Kayky Casagrande
 * @date 04/12/2020
 */

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (request, response) => {
    
    response.send('Oi');
});

module.exports = router;