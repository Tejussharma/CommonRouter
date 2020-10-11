'use strict';

var utils = require('../utils/writer.js');
var GetCountryTaxStructures = require('../service/GetCountryTaxStructuresService');

module.exports._getCountryTaxStructuresGET = function _getCountryTaxStructuresGET (req, res, next, bodylimit, pagelimit) {
  GetCountryTaxStructures._getCountryTaxStructuresGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
