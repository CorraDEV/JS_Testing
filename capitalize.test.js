import capitalize from "./capitalize";

test('string with first letter to uppercase', () => {
    expect(capitalize("hello world!")).toBe("Hello world!");
});