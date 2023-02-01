const { Router } = require('express');
const { SuccessResponseObject, ErrorResponseObject } = require('../common/http');
const demo = require('./demo.route');

const r = Router();

r.use('/demo', demo);

r.get('/', (req, res) => res.status(404).end());

module.exports = r;
