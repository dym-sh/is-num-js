/*
Given a string, return true if the string represents a valid number. A valid number can include integers, a ., -, or +.

reference: https://twitter.com/cassidoo/status/1376408380760276996
*/

const is_num = ( _ ) =>
  /^[\+\-]?(\d+\.?\d*|\.\d+)$/
  .test( _ )

const test_valid =
  [ '7', '0011', '+3.14', '4.', '-.9', '-123.456', '-0.1',
  ]
console.log( 'valid numbers:', test_valid )

const test_invalid =
  [ /* base examples */  'abc', '1a', 'e8', '--6', '-+3', '95x54e53.', '123.41241.123'
  , /* extra edge cases */ '-.', '.', ''
  ]
console.log( 'invalid numbers:', test_invalid )

;

[ ...test_valid, ...test_invalid ]
  .forEach( _ =>
  {
    const bool_is_num = is_num( _ )
        , str_is_num = `'${ _ }' is ${ bool_is_num ? 'a number' : 'NOT a number' }`
        , bool_assertion = bool_is_num
                         ? test_valid.includes( _ )
                         : test_invalid.includes( _ )

        , str_assertion = `as it ${ bool_assertion ? 'should ✅' : 'SHOULDN\'T ❌' } be`

    console.log( `${ str_is_num }, ${ str_assertion }` )
  })
