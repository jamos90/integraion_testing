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

  it('should be able to remove 2 from 5 numbers and get 3', function(){
    calculator.previousTotal = 5;
    const actual = calculator.subtract(2);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to multiply 10 by 3 to get 30', function(){
    calculator.previousTotal = 10;
    const actual = calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 30);
  })

  it('should be ablit to divide 10 by 2 to get 5', function(){
    calculator.previousTotal = 10;
    const actual = calculator.divide(2);
    assert.strictEqual(calculator.runningTotal, 5);
  })

});
