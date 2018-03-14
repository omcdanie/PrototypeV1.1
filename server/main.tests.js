

var assert = require('assert');
describe('Array', function() {
    describe('Dummy Test 01: #indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});


describe("Dummy Test 02: EvenOrOdd Component", function() {
    it("('should pass test", function() {
        assert.equal(1+1,2);
    });
});