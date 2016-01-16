'use strict';

// VARIABLES //

var MAX_ITER = 1075; // 1023+52 (subnormals)
var MAX_BITS = 54; // only 53 bits for fraction


// MULT2 //

/**
* FUNCTION: mult2( x )
*	Converts a fraction to a literal bit representation using the multiply-by-2 algorithm.
*
* @param {Number} x - number less than 1
* @returns {String} bit representation
*/
function mult2( x ) {
	var str;
	var y;
	var i;
	var j;

	str = '';
	if ( x === 0 ) {
		return str;
	}
	j = MAX_ITER;
	for ( i = 0; i < MAX_ITER; i++ ) {
		y = x * 2;
		if ( y >= 1 ) {
			x = y - 1;
			str += '1';
			if ( j === MAX_ITER ) {
				j = i; // first '1'
			}
		} else {
			x = y;
			str += '0';
		}
		if ( y === 1 || i-j > MAX_BITS ) {
			break;
		}
	}
	return str;
} // end FUNCTION mult2()


// EXPORTS //

module.exports = mult2;