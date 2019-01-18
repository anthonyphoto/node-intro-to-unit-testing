const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe("FizzBuzz Test", function() {
    it("normal case", function() {
        const testCase = [
            {   inp: 1, expected: 1 },
            {   inp: 3, expected: 'fizz'},
            {   inp: 30, expected: 'fizz-buzz'},
            {   inp: -5, expected: 'buzz'}
        ];
        testCase.forEach(obj => {
            expect(fizzBuzzer(obj.inp)).to.equal(obj.expected);
        });
    });

    it("not a number", function () {
        const testCase = [
            {inp: 'a'},
            {inp: 'b'}

        ];

/*         testCase.forEach(obj=> {
            expect(fizzBuzzer(obj.inp)).to.throw(Error);
        }); */

        testCase.forEach(obj=> {
            expect(function () { 
                fizzBuzzer(obj.inp);
            }).to.throw(Error);
        });

    });

});