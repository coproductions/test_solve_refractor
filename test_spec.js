//var chai = require('chai');

var should = chai.should();
var expect = chai.expect;

describe('square root sum algorithm', function () {

  it('should be a function', function () {
    squareRootSum.should.be.a('function');
  });
  it('result should be a number', function () {
    squareRootSum(1).should.be.a('number');

  });
  it('should give the right result', function () {
    squareRootSum(1).should.equal(1);
    squareRootSum(2).should.equal(2.41);
    squareRootSum(4).should.equal(6.15);


  });

});