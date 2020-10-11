'use strict';

var utils = require('../utils/writer.js');
var DownloadApp = require('../service/DownloadAppService');

module.exports.downloadAppAppTypePOST = function downloadAppAppTypePOST (req, res, next, appType) {
  DownloadApp.downloadAppAppTypePOST(appType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
