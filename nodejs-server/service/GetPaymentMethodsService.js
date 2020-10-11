'use strict';


/**
 * available payment methods 
 *
 * bodylimit Integer number of  items to be returned (optional)
 * pagelimit Integer number of pages to be shown (optional)
 * returns List
 **/
exports.getPaymentMethodsGET = function(bodylimit,pagelimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "India",
  "paymentMethods" : " "
}, {
  "country" : "India",
  "paymentMethods" : " "
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

