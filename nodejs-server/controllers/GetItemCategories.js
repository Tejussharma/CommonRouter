'use strict';

var utils = require('../utils/writer.js');
var GetItemCategories = require('../service/GetItemCategoriesService');

module.exports.getItemCategoriesGET = function getItemCategoriesGET (req, res, next, bodylimit, pagelimit) {
  GetItemCategories.getItemCategoriesGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
