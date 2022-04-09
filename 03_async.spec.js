const { TestWatcher } = require("jest");
const Ajax = require("./03_async");

describe("AJAX: echo", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });
  test("should return promise value", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });
  test("should return error", () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});
