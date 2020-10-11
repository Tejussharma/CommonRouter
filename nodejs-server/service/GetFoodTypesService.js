'use strict';


/**
 * catagory of food available 
 *
 * bodylimit Integer number of menu items to be returned (optional)
 * pagelimit Integer number of pages to be shown (optional)
 * returns List
 **/
exports.getFoodTypesGET = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "display" : "Jain",
  "value" : "jain",
  "desc" : "Jain"
}, {
  "display" : "Jain",
  "value" : "jain",
  "desc" : "Jain"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

