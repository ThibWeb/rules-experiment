rules-experiment
================

An experiment around simple business rules written in JavaScript for non-technical people.

## Goals

Offer the simplest syntax possible to create simple expressions. Thus,

- Expressions must always evaluate to either true or false.
- Expressions are composed of logical and mathematical operators.
- Expression's syntax should be as terse as possible.

## Trying it out

Either with node (`node index.js`) or in the browser console (open `index.html`).

## Syntax

```
    [ 5 ,EGAL, 5 ]

    [ 5 ,NONEGAL, 3 ]

    [[ 5 ,EGAL, 5 ] ,ET, [ 5 ,NONEGAL, 3 ]]

    [[ 5 ,EGAL, 5 ] ,OU, [ 5 ,EGAL, 2 ]]

    [
      [ 5 ,EGAL, 5 ]
      ,ET,
      [
        [ 5 ,EGAL, 5 ]
        ,OU,
        [ 5 ,EGAL, 2 ]
      ]
    ]

    [ 5 ,DANS, [4,5,6] ]
```

```
    5 EGAL 5
    
    5 NONEGAL 3
    
    ( 5 EGAL 5 ) ET ( 5 NONEGAL 3 )
    
    ( 5 EGAL 5 ) OU ( 5 EGAL 2 )
    
    ( 5 EGAL 5 ) ET (( 5 EGAL 5 ) OU ( 5 EGAL 2 ))
    
    5 DANS [4,5,6]
```
