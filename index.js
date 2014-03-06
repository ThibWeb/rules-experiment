var RULES = (function () {
  'use strict';

  function parse(raw) {
    return '[' + raw.replace(/\(\s*/g, '[').replace(/\s*\)/g, ']').replace(/\s/g, ',') + ']';
  }

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

  function inside(op1, op2) {
    return op2.indexOf(op1) !== -1;
  }

  return {
    evaluate: evaluate,
    parse: parse,

    EGAL: equal,
    NONEGAL: notEqual,
    ET: and,
    OU: or,
    DANS: inside
  };
})();

(function (EGAL, NONEGAL, ET, OU, DANS) {
  'use strict';

  var testExpressions = [

    [ 5 ,EGAL, 5 ]

    ,

    [ 5 ,NONEGAL, 3 ]

    ,

    [[ 5 ,EGAL, 5 ] ,ET, [ 5 ,NONEGAL, 3 ]]

    ,

    [[ 5 ,EGAL, 5 ] ,OU, [ 5 ,EGAL, 2 ]]

    ,

    [
      [ 5 ,EGAL, 5 ]
      ,ET,
      [
        [ 5 ,EGAL, 5 ]
        ,OU,
        [ 5 ,EGAL, 2 ]
      ]
    ]

    ,

    [ 5 ,DANS, [4,5,6] ]

  ];

  testExpressions.forEach(function (expr) {
    console.log(RULES.evaluate(expr));
  });

  var rawExpressions = [
    '5 EGAL 5',
    '5 NONEGAL 3',
    '( 5 EGAL 5 ) ET ( 5 NONEGAL 3 )',
    '( 5 EGAL 5 ) OU ( 5 EGAL 2 )',
    '( 5 EGAL 5 ) ET (( 5 EGAL 5 ) OU ( 5 EGAL 2 ))',
    '5 DANS [4,5,6]'
  ];

  rawExpressions.forEach(function (raw) {
    console.log(RULES.evaluate(eval(RULES.parse(raw))));
  });

})(RULES.EGAL, RULES.NONEGAL, RULES.ET, RULES.OU, RULES.DANS);


