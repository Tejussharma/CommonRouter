'use strict';

var utils = require('../utils/writer.js');
var GetRandomQuote = require('../service/GetRandomQuoteService');

module.exports.getRandomQuoteGET = function getRandomQuoteGET (req, res, next, bodylimit, pagelimit) {
  GetRandomQuote.getRandomQuoteGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
