'use strict';


/**
 * available items 
 *
 * bodylimit Integer number of menu items to be returned (optional)
 * pagelimit Integer number of pages to be shown (optional)
 * returns List
 **/
exports.getItemCategoriesGET = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "display" : "Todays_Special",
  "value" : "todays_special",
  "desc" : "Todays_Special"
}, {
  "display" : "Todays_Special",
  "value" : "todays_special",
  "desc" : "Todays_Special"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

