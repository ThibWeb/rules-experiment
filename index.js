var RULES = (function () {
  'use strict';

  function evaluate(expr) {
    return expr[1](expr[0], expr[2]);
  }

  function equal(op1, op2) {
    return op1 == op2;
  }

  return {
    evaluate: evaluate,
    EGAL: equal
  };
})();

(function (EGAL) {

  console.log(RULES.evaluate( [ 5 ,EGAL, 5 ] ));

})(RULES.EGAL);


