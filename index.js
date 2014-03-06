var RULES = (function () {
  'use strict';

  function evaluate(expr) {
    return expr[1](expr[0], expr[2]);
  }

  function equal(op1, op2) {
    return op1 == op2;
  }

  function notEqual(op1, op2) {
    return op1 != op2;
  }

  function and(op1, op2) {
    return op1 && op2;
  }

  function or(op1, op2) {
    return op1 || op2;
  }

  return {
    evaluate: evaluate,

    EGAL: equal,
    NONEGAL: notEqual,
    ET: and,
    OU: or
  };
})();

(function (EGAL, NONEGAL, ET, OU) {

  console.log(RULES.evaluate( [ 5 ,EGAL, 5 ] ));
  console.log(RULES.evaluate( [ 5 ,NONEGAL, 3 ] ));
  console.log(RULES.evaluate( [ false ,OU, false ] ));

})(RULES.EGAL, RULES.NONEGAL, RULES.ET, RULES.OU);


