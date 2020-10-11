'use strict';

var utils = require('../utils/writer.js');
var GetPaymentMethods = require('../service/GetPaymentMethodsService');

module.exports.getPaymentMethodsGET = function getPaymentMethodsGET (req, res, next, bodylimit, pagelimit) {
  GetPaymentMethods.getPaymentMethodsGET(bodylimit, pagelimit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
