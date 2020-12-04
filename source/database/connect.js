const mongoose = require('mongoose');
const config = require('../config/database.json');

mongoose.Promise = global.Promise;

mongoose.connect(`${config.url}/${config.database}`, config.config);