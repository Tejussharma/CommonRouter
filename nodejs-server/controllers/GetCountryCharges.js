'use strict';

var utils = require('../utils/writer.js');
var GetCountryCharges = require('../service/GetCountryChargesService');

module.exports.getCountryChargesGET = function getCountryChargesGET (req, res, next, bodylimit, pagelimit) {
  GetCountryCharges.getCountryChargesGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
