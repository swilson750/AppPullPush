const chai = require("chai");
const expect = chai.expect;
const operate = require("../problems/01-operate");

describe("operate", function() {
  it("operate(456, 123, 'greater than') returns true", function () {
    expect(operate(456, 123, "greater than")).to.eq(true);
  });
  it("operate(654, 654, 'less than') returns false", function () {
    expect(operate(654, 654, "less than")).to.eq(false);
  });
  it("operate( 99,   3, 'equal to') returns false", function () {
    expect(operate(99, 3, "equal to")).to.eq(false);
  });
  it("operate(111,   3, 'not equal to') returns true", function () {
    expect(operate(111, 3, "not equal to")).to.eq(true);
  });
  it("operate( 42,  42, 'opposite to') returns 'Invalid Operation'", function () {
    expect(operate(42, 42, "opposite to")).to.eq("Invalid Operation");
  });
});
