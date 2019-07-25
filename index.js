class Operations {
    constructor (numero1, numero2) {
      this.numero1 = numero1;
      this.numero2 = numero2;
      this.resultado = 0
    }
  
    get sum() {
      return this.calcSum();
    }
  
    calcSum() {    
      this.resultado = this.numero1 + this.numero2;
      return {
        value: this.resultado,
        text: `La suma de ${this.numero1} + ${this.numero2} = ${this.resultado}`
      }
    }
  
    get subtraction() {
      return this.calcSubtraction()
    }
  
    calcSubtraction() {
      this.resultado = this.numero1 - this.numero2;
      return {
        value: this.resultado,
        text: `La resta de ${this.numero1} - ${this.numero2} = ${this.resultado}`
      }
    }
  
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      this.resultado = (this.numero1 * this.numero2) / 2;
      return {
        value: this.resultado,
        text: `El área del triángulo es ${this.resultado}`
      }
    }
  }
  
  module.exports = Operations;