const sayPoop = require('./poop');

test('says with poop', () => {
    const str = 'hello';
    expect(sayPoop(str)).toBe(`💩${str}💩`);
})