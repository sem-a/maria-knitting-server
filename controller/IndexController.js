'use strict'

const response = require('../response');

exports.index = (req, res) => {
  response.status('Server started', res);
};