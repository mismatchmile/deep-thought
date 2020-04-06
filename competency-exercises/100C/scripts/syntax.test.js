import {
    numTest,
    stringTest,
    boolTest,
    arrayTest,
    objTest,
    undefTest,
    ifElseTest,
    paramTest,
    returnTest,
    arrayPopTest,
    arrayPushTest,
    arrayUpdateTest,
    forTest,
    forInTest,
    whileTest,
    doWhileTest,
    forEachTest,
    declareObjectTest,
    lookupKeyTest
} from './syntax.js'

test('number', () => {
    expect(numTest()).toBe(3);
});

test('numberFail', () => {
    expect(numTest()).toBe(1);
});

test('string', () => {
    expect(stringTest()).toBe("bovine disease");
});

test('stringFail', () => {
    expect(stringTest()).toBe("Bloog");
});

test('boolean', () => {
    expect(boolTest()).toBe(true);
});

test('booleanFail', () => {
    expect(boolTest()).toBe(FALSE);
});

test('array', () => {
    expect(arrayTest()).toBe("Item1 Item2");
});

test('arrayFail', () => {
    expect(arrayTest()).toBe("Foo");
});

test('object', () => {
    expect(objTest()).toBe("Fiat500");
});

test('objectFail', () => {
    expect(objTest()).toBe("Blarg");
});

test('undefined', () => {
    expect(undefTest()).toBe(undefined);
});

test('undefinedFail', () => {
    expect(undefTest()).toBe("Bloog");
});

test('ifElse', () => {
    expect(ifElseTest()).toBe(1);
});

test('ifElseFail', () => {
    expect(ifElseTest()).toBe(2);
});

test('parameter', () => {
    expect(paramTest()).toBe(3);
});

test('parameterFail', () => {
    expect(paramTest()).toBe(2);
});

test('return', () => {
    expect(returnTest()).toBe(1);
});

test('returnFail', () => {
    expect(returnTest()).toBe(2);
});

test('arrayPop', () => {
    expect(arrayPopTest()).toBe("Two");
});

test('arrayPopFail', () => {
    expect(arrayPopTest()).toBe(2);
});

test('arrayPush', () => {
    expect(arrayPushTest()).toBe("Four");
});

test('arrayPushFail', () => {
    expect(arrayPushTest()).toBe(4);
});

test('arrayUpdate', () => {
    expect(arrayUpdateTest()).toBe(1);
});

test('arrayUpdateFail', () => {
    expect(arrayUpdateTest()).toBe("One");
});

test('for', () => {
    expect(forTest()).toBe(15);
});

test('forFail', () => {
    expect(forTest()).toBe(69);
});

test('forIn', () => {
    expect(forInTest()).toBe("One");
});

test('forInFail', () => {
    expect(forInTest()).toBe(1);
});

test('while', () => {
    expect(whileTest()).toBe(15);
});

test('whileFail', () => {
    expect(whileTest()).toBe(82);
});

test('doWhile', () => {
    expect(doWhileTest()).toBe(153);
});

test('doWhileFail', () => {
    expect(doWhileTest()).toBe(82);
});

test('forEach', () => {
    expect(forEachTest()).toBe(10);
});

test('forEachFail', () => {
    expect(forEachTest()).toBe(43);
});

test('declareObject', () => {
    expect(declareObjectTest()).toBe("Fiat500");
});

test('declareObjectFail', () => {
    expect(declareObjectTest()).toBe("Glorb");
});

test('lookupKey', () => {
    expect(lookupKeyTest()).toBe("white");
});

test('lookupKeyFail', () => {
    expect(lookupKeyTest()).toBe("black");
});