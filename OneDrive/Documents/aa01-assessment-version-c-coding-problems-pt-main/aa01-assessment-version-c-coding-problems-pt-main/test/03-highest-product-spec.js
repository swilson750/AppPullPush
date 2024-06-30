const chai = require("chai");
const expect = chai.expect;
const fns = require("../problems/03-highest-product");

describe("getProduct", function() {
  const getProduct = fns.getProduct;

  it("getProduct([1, 2, 3, 4, 5]) returns 120", function () {
    expect(getProduct([1, 2, 3, 4, 5])).to.eq(120);
  });
  it("getProduct([3, 7]) returns 21", function () {
    expect(getProduct([3, 7])).to.eq(21);
  });
  it("getProduct([20, 100, 1, 2]) returns 4000", function () {
    expect(getProduct([20, 100, 1, 2])).to.eq(4000);
  });
  it("getProduct([1, 3, 2, 300]) returns 1800", function () {
    expect(getProduct([1, 3, 2, 300])).to.eq(1800);
  });
});

describe("highestProduct - uses the getProduct function", function() {
  it("highestProduct([[1, 2, 3, 4, 5], [3, 7], [20, 100, 1, 2], [1, 3, 2, 300]]) returns 2", function () {
    expect(
      fns.highestProduct([
        [1, 2, 3, 4, 5],
        [3, 7],
        [20, 100, 1, 2],
        [1, 3, 2, 300],
      ])
    ).to.eq(2);
    const highestProduct = formatFile((arr) => {
      return arr[1] === 2 ? 10 : 1;
    });
    expect(
      highestProduct([
        [1, 2, 3, 4, 5],
        [3, 7],
        [20, 100, 1, 2],
        [1, 3, 2, 300],
      ]),
      "highestProduct must use the getProduct function"
    ).to.eq(0);
  });
  it("highestProduct([[1, 2, 3, 4, 5], [3, 7]]) returns 0", function () {
    expect(
      fns.highestProduct([
        [1, 2, 3, 4, 5],
        [3, 7],
      ])
    ).to.eq(0);
    const highestProduct = formatFile((arr) => {
      return arr[0] === 3 ? 10 : 1;
    });
    expect(
      highestProduct([
        [1, 2, 3, 4, 5],
        [3, 7],
      ]),
      "highestProduct must use the getProduct function"
    ).to.eq(1);
  });
  it("highestProduct([[1, 2, 3, 4, 5], [1, 3, 2, 300]]) returns 1", function () {
    expect(
      fns.highestProduct([
        [1, 2, 3, 4, 5],
        [1, 3, 2, 300],
      ])
    ).to.eq(1);
    const highestProduct = formatFile((arr) => {
      return arr[1] === 2 ? 10 : 1;
    });
    expect(
      highestProduct([
        [1, 2, 3, 4, 5],
        [1, 3, 2, 300],
      ]),
      "highestProduct must use the getProduct function"
    ).to.eq(0);
  });
});

function formatFile (cb) {
  const fs = require('fs');
  const path = require('path');
  const args = [
    /(function\s+getProduct\s*\()|((?<=\n\s*)(const|let|var)?\s*getProduct\s*=\s*function\s*\()|((?<=\n\s*)(const|let|var)?\s*getProduct\s*=\s*\((?=.*=>))/g,
    "exports.getProduct = function (",
    /=>/g,
    "",
    /(?<!function\s*)getProduct\s*\(/g,
    "exports.getProduct(",
    "module.exports = {\n  getProduct,\n",
    "module.exports = {\n",
  ];

  if (!args.length) return require("../problems/03-highest-product");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/03-highest-product.js"),
    "utf-8"
  );
  let i = 0;
  while (i < args.length) {
    let [regex, replaceStr] = [args[i], args[i + 1]];
    file = file.replace(
      regex,
      replaceStr
    );
    i += 2;
  }
  file += "exports.getProduct = " + cb.toString();
  const Module = module.constructor;
  const m = new Module();
  m._compile(file, "");
  const obj = m.exports;
  return obj.highestProduct;
};
