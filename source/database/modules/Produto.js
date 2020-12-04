const mongoose = require('../connect');
/**
 * Retorna o modulo Produto
 * @author Kayky Casagrande
 * @date 04/12/2020
 */

const db = require('../connect');

const schema = {
    nome: String,
    valor: Number,
    descricao: String
}

const Produto = new mongoose.Schema(schema);

module.exports = mongoose.model('Produto', Produto);