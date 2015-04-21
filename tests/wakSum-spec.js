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


});
/* jshint ignore:end */