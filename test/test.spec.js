const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();

const Operations = require('../index');

describe('Mathematical operations', () => {
    const operation = new Operations(10, 5);
  
    describe('Basic operation: sum with assert', () => {
        it('Sum of 2 numbers equals 15', () => {
            const sum = operation.sum.value;
            assert.equal(sum, 15);
        })
    
        it('The sum of 10 + 5 equals 15 ', () => {
            const sum = operation.sum.text;
            assert.equal(sum, 'La suma de 10 + 5 = 15');
        })
    
        it('The result is a string', () => {
            const sum = operation.sum.text;
            assert.typeOf(sum, 'string');
        })
    
        it('The result is a number', () => {
            const sum = operation.sum.value;
            assert.typeOf(sum, 'number');
        })
  
    })
  
    describe('Basic operation: subtraction with expect', () => {
      it('Subtraction of 2 numbers equals 5', () => {
        const res = operation.subtraction.value;
        expect(res).to.equal(5);
      })
  
      it('The subtraction of 10 - 5 equals 5 ', () => {
        const res = operation.subtraction.text;
        expect(res).to.equal('La resta de 10 - 5 = 5');
      })
  
      it('The result is a string', () => {
        const res = operation.subtraction.text;
        expect(res).to.be.a('string');
      })
  
      it('The result is a number', () => {
        const res = operation.subtraction.value;
        expect(res).to.be.a('number');
      })
    })
})