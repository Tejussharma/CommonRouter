'use strict';


/**
 * generate a random quote 
 *
 * bodylimit Integer number of menu items to be returned (optional)
 * pagelimit Integer number of pages to be shown (optional)
 * returns String
 **/
exports.getRandomQuoteGET = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Your diet is a bank account. Good food choices are good investments. - Bethenny Frankel";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

