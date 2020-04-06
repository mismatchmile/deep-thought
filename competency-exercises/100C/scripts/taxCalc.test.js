import {
    bracket
} from './taxCalc.js'

test('taxCalcTest', () => {
    expect(bracket()).toBe(311402.87);
});

test('taxCalcTestFail', () => {
    expect(bracket()).toBe(15);
});