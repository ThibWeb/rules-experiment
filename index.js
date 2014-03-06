var RULES = (function () {
  'use strict';

  function evaluate(expr) {
    return isExpression(expr) ? expr[1](evaluate(expr[0]), evaluate(expr[2])) : expr;
  }

  function isExpression(expr) {
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
  'use strict';

  var testExpressions = [

    [ 5 ,EGAL, 5 ],

    [ 5 ,NONEGAL, 3 ],

    [[ 5 ,EGAL, 5 ] ,ET, [ 5 ,NONEGAL, 3 ]],

    [[ 5 ,EGAL, 5 ] ,OU, [ 5 ,EGAL, 2 ]],

    [
      [ 5 ,EGAL, 5 ]
      ,ET,
      [
        [ 5 ,EGAL, 5 ]
        ,OU,
        [ 5 ,EGAL, 2 ]
      ]
    ]
  ];


  testExpressions.forEach(function (expr) {
    console.log(RULES.evaluate(expr));
  });

})(RULES.EGAL, RULES.NONEGAL, RULES.ET, RULES.OU);


