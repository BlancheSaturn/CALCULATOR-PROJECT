const controlOperator  = require('./main.js').controlOperator

// test('simple operation', () => {
//     const nextOperator = '+';
//     const calculator = {
//         showValue: '15',
//         previousOperand: null,
//         operator: null,
//     }
//     const outputExpected = {
//         showValue: '15',
//         previousOperand: 15,
//         operator: '+',
//     }
//     expect(controlOperator(nextOperator, calculator, (a, b) => a + b)).toEqual(outputExpected);
// });

test('perform sum', () => {
    const nextOperator = '+';
    const calculator = {
        showValue: '15',
        previousOperand: 30,
        operator: '+',
    }
    const outputExpected = {
        showValue: '45',
        previousOperand: 45,
        operator: '+',
    }
    expect(controlOperator(nextOperator,  (a, b) => a + b)).toEqual(outputExpected);
});

