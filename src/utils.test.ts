import { describe, expect, it } from "vitest";
import { queryfy } from "./utils";

describe("queryfy", () => {
    it("should convert all types to string", () => {
        expect(queryfy({ a: 1, b: true, c: "a", d: null, e: undefined })).toBe("?a=1&b=true&c=a&d=null");
    });

    it("should encode strings", () => {
        expect(queryfy({ a: " ", b: "%" })).toBe("?a=+&b=%25");
    });

    it("should works with empty query", () => {
        expect(queryfy({ a: undefined, b: undefined })).toBe("");
        expect(queryfy({})).toBe("");
    });
});
