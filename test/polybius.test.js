// Write your tests here!
let { polybius } = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should maintain spaces throughout", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.eql(expected);
  });

  it("should convert i and j to 42", () => {
    const expected = "4242";
    const actual = polybius("ij");
    expect(actual).to.eql(expected);
  });
  it("should show both i and j when decoding 42", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "111111";
    const actual = polybius("AAA");
    expect(actual).to.eql(expected);
  });
  it("should keep the output as a string when encoding", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.eql(expected);
  });
  it("should have an even number of characters excluding spaces, otherwise return false", () => {
    const expected = false;
    const actual = polybius("443", false);
    expect(actual).to.eql(expected);
  });
});
