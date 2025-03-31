import { cn } from "./utils";

describe("cn", () => {
  it("should return an empty string when no arguments are passed", () => {
    expect(cn()).toBe("");
  });

  it("should return the same string when a single string is passed", () => {
    expect(cn("test")).toBe("test");
  });

  it("should combine multiple strings with spaces", () => {
    expect(cn("test1", "test2", "test3")).toBe("test1 test2 test3");
  });

  it("should filter out falsy values", () => {
    expect(cn("test1", null, undefined, false, "test2")).toBe("test1 test2");
  });

  it("should handle arrays of class names", () => {
    expect(cn(["test1", "test2"], "test3")).toBe("test1 test2 test3");
  });

  it("should handle objects with conditional class names", () => {
    expect(cn({ test1: true, test2: false, test3: true })).toBe("test1 test3");
  });

  it("should handle a mix of strings, arrays, and objects", () => {
    expect(
      cn("test1", ["test2", "test3"], { test4: true, test5: false }),
    ).toBe("test1 test2 test3 test4");
  });

  it("should merge Tailwind CSS class names correctly", () => {
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    expect(cn("m-2 p-4", "p-2")).toBe("m-2 p-2");
  });
});
