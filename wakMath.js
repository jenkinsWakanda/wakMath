// WAF.define('wakMath', ...)

/**
 * Sums two given numbers, returns NaN if one of the arguments is a string
 * @param {a} number - The first addend
 * @param {b} number - The second addend
 * @method wakSum
 */
function wakSum(a,b){
	return parseInt(a) + parseInt(b);
}

// ...
