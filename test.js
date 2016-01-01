var should = require('should');
var check = require('./index.js');

describe('test the given environment has DOM', function() {
	it('test for node cli', function() {
		var env = check();
		env.should.equal(false);
	});
	it('test for browser', function() {
		global.window = {};
		global.document = {};
		var env = check();
		env.should.equal(true);
	});
});