import { Addition, Multiplication, Subtraction } from "./functions";
import { expect } from "@jest/globals";

test("addition of two numbers", () => {
  expect(Addition(1, 2)).toBe(3);
});
test("multiplication of two numbers", () => {
  expect(Multiplication(2, 2)).toBe(4);
});
test("subtraction of two numbers", () => {
  expect(Subtraction(2, 2)).toBe(0);
});
