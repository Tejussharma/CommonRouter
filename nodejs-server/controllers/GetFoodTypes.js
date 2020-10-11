'use strict';

var utils = require('../utils/writer.js');
var GetFoodTypes = require('../service/GetFoodTypesService');

module.exports.getFoodTypesGET = function getFoodTypesGET (req, res, next, bodylimit, pagelimit) {
  GetFoodTypes.getFoodTypesGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
