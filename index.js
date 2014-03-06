var RULES = (function () {
  'use strict';

  function evaluate(expr) {
    if (isRuleExpression(expr)) {
      return expr[1](evaluate(expr[0]), evaluate(expr[2]));
    }
    else {
      return expr;
    }
  }

  function isRuleExpression(expr) {
    return expr instanceof Array && isFunction(expr[1]);
  }

  function isFunction(fn) {
    var obj = {};
    return fn && obj.toString.call(fn) === '[object Function]';
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
  console.log(RULES.evaluate( [[ 5 ,EGAL, 5 ] ,ET, [ 5 ,NONEGAL, 3 ]] ));
  console.log(RULES.evaluate( [[ 5 ,EGAL, 5 ] ,OU, [ 5 ,EGAL, 2 ]] ));

})(RULES.EGAL, RULES.NONEGAL, RULES.ET, RULES.OU);


