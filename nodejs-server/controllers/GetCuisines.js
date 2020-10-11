'use strict';

var utils = require('../utils/writer.js');
var GetCuisines = require('../service/GetCuisinesService');

module.exports.getCuisinesGET = function getCuisinesGET (req, res, next, bodylimit, pagelimit) {
  GetCuisines.getCuisinesGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
