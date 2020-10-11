'use strict';


/**
 * searches inventory
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * bodylimit Integer number of menu items to be returned (optional)
 * pagelimit Integer number of pages to be shown (optional)
 * returns List
 **/
exports.getItemGroupsGET = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "display" : "Desserts",
  "value" : "dessert",
  "desc" : ""
}, {
  "display" : "Desserts",
  "value" : "dessert",
  "desc" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * searches inventory
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * bodylimit Integer number of menu items to be returned (optional)
 * pagelimit Integer number of pages to be shown (optional)
 * returns List
 **/
exports.searchInventory = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "display" : "Desserts",
  "value" : "dessert",
  "desc" : ""
}, {
  "display" : "Desserts",
  "value" : "dessert",
  "desc" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

