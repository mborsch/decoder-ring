// Write your tests here!
let { caesar } = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should encode a string and shift it properly", () => {
    const expected = "khoor";
    const actual = caesar("hello", 3);
    expect(actual).to.equal(expected);
  });
  it("should return false if there's no shift value", () => {
    const expected = false;
    const actual = caesar("hi");
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("hi", 32);
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("hi", -29);
    expect(actual).to.eql(expected);
  });
  it("should maintain spacing and special characters throughout", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.eql(expected);
  });
  it("should wrap around the alphabet if a letter goes past", () => {
    const expected = "aaa";
    const actual = caesar("zzz", 1);
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "aaa";
    const actual = caesar("ZZZ", 1);
    expect(actual).to.eql(expected);
  });
  it("should be able to reverse direction for decoding", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
  });
});
