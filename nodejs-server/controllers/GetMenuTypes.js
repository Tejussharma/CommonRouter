'use strict';

var utils = require('../utils/writer.js');
var GetMenuTypes = require('../service/GetMenuTypesService');

module.exports.getItemGroupsGET = function getItemGroupsGET (req, res, next, bodylimit, pagelimit) {
  GetMenuTypes.getItemGroupsGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchInventory = function searchInventory (req, res, next, bodylimit, pagelimit) {
  GetMenuTypes.searchInventory(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
