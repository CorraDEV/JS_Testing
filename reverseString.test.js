import reverseString from "./reverseString";

test('reverse a string', () => {
    expect(reverseString("hello world!")).toBe("!dlrow olleh");
});