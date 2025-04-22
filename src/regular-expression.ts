// 前方一致
function startsWith({
  targetString,
  searchString,
}: {
  targetString: string;
  searchString: string;
}): boolean {
  const reg = new RegExp(`^${searchString}`);
  return reg.test(targetString);
}

// 前方不一致
function notStartsWith({
  targetString,
  searchString,
}: {
  targetString: string;
  searchString: string;
}): boolean {
  const reg = new RegExp(`^(?!${searchString})`);
  return reg.test(targetString);
}

if (import.meta.vitest) {
  const { test, expect, describe } = import.meta.vitest;

  describe("startsWith", () => {
    test("targetString に searchString が含まれているときは true を返す", () => {
      expect(startsWith({ targetString: "abc", searchString: "a" })).toBe(true);
    });
    test("targetString に searchString が含まれていないときは false を返す", () => {
      expect(startsWith({ targetString: "abc", searchString: "b" })).toBe(
        false
      );
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
}
