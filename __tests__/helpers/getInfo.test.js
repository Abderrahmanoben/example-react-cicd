//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect
const getInfo = require('../../src/helpers/getInfo')

test('names are joining correctly', () => {
    const extraInfo = {
        name: "test",
        number: 12,
        address: "Barcelona"
    };
    const results = getInfo(extraInfo);
    expect(results).toBe("test, 12, Barcelona");
});

//TODO: write a test if no data is passed to the function (returns "none")

test('no data passed to the function', () => {

    expect(getInfo()).toBe("none");
});