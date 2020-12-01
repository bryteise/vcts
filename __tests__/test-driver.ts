import { myfoo } from "../test";

it('runs myfoo and gets back the input', () => {
    const arg = 5;
    expect(myfoo(arg)).toBe(arg);
});