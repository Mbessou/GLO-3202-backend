const mongoose = require('mongoose');
const dbConfig = require('../config/database.config');
const serverConfig = require('../config/server.config');

const server = {};

server.port = process.env.SERVER_PORT;
server.secret = process.env.SERVER_SECRET;

server.db = {};
server.db.salt = dbConfig.salt;
server.db.mongoose = mongoose;
server.db.mongoose.set('useFindAndModify', false);
server.db.url = dbConfig.url;
server.db.user = require('./user.model');

module.exports = server;