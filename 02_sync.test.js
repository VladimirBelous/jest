const Loadash = require("./02_sync");

let _ = new Loadash();

describe("Loadash: compact", () => {
  let array;

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "hello"];
  });
  afterAll(() => {
    _ = new Loadash();
  });

  test("Should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should remove falsy values from array", () => {
    const result = [42, true, "hello"];
    expect(_.compact(array)).toEqual(result);
  });

  test("shold not contained falsy values", () => {
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(null);
  });
});

describe("Loadash: groupBy", () => {
  test("Should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("should grooup array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });
  test("should grooup array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      5: ["three"],
      3: ["one", "two"],
    };
    expect(_.groupBy(array, "length")).toEqual(result);
  });
  test("should grooup NOT return array", () => {
    const array = ["one", "two", "three"];
    const result = {
      5: ["three"],
      3: ["one", "two"],
    };
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
