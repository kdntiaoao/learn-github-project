import { describe, expect, test } from "vitest";
import {
  endsWith,
  notEndsWith,
  notStartsWith,
  startsWith,
} from "./regular-expression";

describe("startsWith", () => {
  test("targetString に searchString が含まれているときは true を返す", () => {
    expect(startsWith({ targetString: "abc", searchString: "a" })).toBe(true);
  });
  test("targetString に searchString が含まれていないときは false を返す", () => {
    expect(startsWith({ targetString: "abc", searchString: "b" })).toBe(false);
  });
});

describe("notStartsWith", () => {
  test("targetString に searchString が含まれていないときは true を返す", () => {
    expect(notStartsWith({ targetString: "abc", searchString: "b" })).toBe(
      true
    );
  });
  test("targetString に searchString が含まれているときは false を返す", () => {
    expect(notStartsWith({ targetString: "abc", searchString: "a" })).toBe(
      false
    );
  });
});

describe("endsWith", () => {
  test("targetString に searchString が含まれているときは true を返す", () => {
    expect(endsWith({ targetString: "abc", searchString: "c" })).toBe(true);
  });
  test("targetString に searchString が含まれていないときは false を返す", () => {
    expect(endsWith({ targetString: "abc", searchString: "b" })).toBe(false);
  });
});

describe("notEndsWith", () => {
  test("targetString に searchString が含まれていないときは true を返す", () => {
    expect(notEndsWith({ targetString: "abc", searchString: "b" })).toBe(true);
  });
  test("targetString に searchString が含まれているときは false を返す", () => {
    expect(notEndsWith({ targetString: "abc", searchString: "c" })).toBe(false);
  });
});
