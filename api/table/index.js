const Router = require('koa-router');

const tables = new Router();
const tableCtrl = require('./table.controller');

tables.get('/tables', tableCtrl.list);

module.exports = tables;