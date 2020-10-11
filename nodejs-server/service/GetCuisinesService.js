'use strict';


/**
 * available cuisines 
 *
 * bodylimit Integer number of menu items to be returned (optional)
 * pagelimit Integer number of pages to be shown (optional)
 * returns List
 **/
exports.getCuisinesGET = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "display" : "Chinese",
  "value" : "chinese",
  "desc" : ""
}, {
  "display" : "Chinese",
  "value" : "chinese",
  "desc" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

