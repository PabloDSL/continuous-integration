const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();

const Operations = require('../index');

describe('Operaciones matemáticas', () => {
    const operation = new Operations(10, 10);
  
    describe('Operaciones básicas, sumas con assert', () => {
        it('La suma de dos numeros debería ser 15', () => {
            const sum = operation.sum.value;
            assert.equal(sum, 15);
        })
    
        it('La suma de 10 y 5 es 15', () => {
            const sum = operation.sum.text;
            assert.equal(sum, 'La suma de 10 + 5 = 15');
        })
    
        it('La suma es un string', () => {
            const sum = operation.sum.text;
            assert.typeOf(sum, 'string');
        })
    
        it('La suma es un numero', () => {
            const sum = operation.sum.value;
            assert.typeOf(sum, 'number');
        })
  
    })
  
    describe('Operaciones básicas, resta con expect', () => {
      it('la resta de dos numeros es 5', () => {
        const res = operation.subtraction.value;
        expect(res).to.equal(5);
      })
  
      it('la resta de 10 - 5 es igual a 5', () => {
        const res = operation.subtraction.text;
        expect(res).to.equal('La resta de 10 - 5 = 5');
      })
  
      it('El resultado es un string', () => {
        const res = operation.subtraction.text;
        expect(res).to.be.a('string');
      })
  
      it('El resultado es un numero', () => {
        const res = operation.subtraction.value;
        expect(res).to.be.a('number');
      })
    })
})