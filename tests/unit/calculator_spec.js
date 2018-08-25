var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add numbers to the running total', function(){
    const actual = calculator.add(4);
    assert.strictEqual(calculator.runningTotal,4);
  })

  it('should be able to remove numbers from the running total', function(){
    calculator.previousTotal = 5;
    const actual = calculator.subtract(2);
    assert.strictEqual(calculator.runningTotal, 3);
  })

});
