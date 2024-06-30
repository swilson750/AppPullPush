const chai = require("chai");
const expect = chai.expect;
const multiplesOfSeven = require("../problems/02-debugging-multiples-of-seven");

describe("multiplesOfSeven", function() {
  it("multiplesOfSeven(1) returns []", function () {
    expect(multiplesOfSeven(1)).to.eql([]);
  });
  it("multiplesOfSeven(7) returns [7]", function () {
    expect(multiplesOfSeven(7)).to.eql([7]);
  });
  it("multiplesOfSeven(15) returns [7, 14]", function () {
    expect(multiplesOfSeven(15)).to.eql([7, 14]);
  });
  it("multiplesOfSeven(85) returns [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84]", function () {
    expect(multiplesOfSeven(85)).to.eql([
      7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84,
    ]);
  });
});
