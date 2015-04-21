/* jshint ignore:start */
describe("Testing wakSum", function() {

	// check that wakSum is defined and a function
	it("wakSum should be defined",function(){
		expect(wakSum).to.be.a('function');
	});

	it("wakSum should return the sum of the two arguments",function(){
		var a = 1.5,
			b = 3,
			result = wakSum(a,b);

		expect(result).to.be.equal(4.5);
	});

	it("wakSum should return NaN when one or more arguments are strings",function(){
		var c = '123tototata',
			d = 3,
			stringResult = wakSum(c,d);

		expect(stringResult).to.deep.equal(NaN);
	});

});
/* jshint ignore:end */