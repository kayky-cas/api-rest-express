/**
 * Modulo que retorna a conexão com o banco de dados
 * @author Kayky Casagrande
 * @date 04/12/2020
 */

const mongoose = require('mongoose');
const config = require('../config/database.json');

mongoose.Promise = global.Promise;

mongoose.connect(`${config.url}/${config.database}`, config.config);

module.exports = mongoose;