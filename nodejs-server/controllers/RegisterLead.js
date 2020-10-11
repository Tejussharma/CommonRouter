'use strict';

var utils = require('../utils/writer.js');
var RegisterLead = require('../service/RegisterLeadService');

module.exports.registerLeadPOST = function registerLeadPOST (req, res, next, body) {
  RegisterLead.registerLeadPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
