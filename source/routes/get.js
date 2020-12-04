const express = require('express');
const bodyParser = require('body-parser');
const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {

    response.send('Oi');
});
