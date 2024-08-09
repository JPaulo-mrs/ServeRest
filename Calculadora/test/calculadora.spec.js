import assert from 'assert'
import {expect} from 'chai'
import calculadora from '../src/calculadora.js'



describe('Testes de adição',()=>{
    it('Deve somar 4 e 5 resultando em 9', ()=>{
        let resultado = calculadora.soma(4,5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', ()=>{
        let resultado = calculadora.soma(-4,5)
        expect(resultado).to.be.eq(1)
    })
})

describe('Testes de subtração',()=>{
    it('Deve subtrair 4 e 5 resultando em -1', ()=>{
        let resultado = calculadora.subtracao(4,5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair -4 e 5 resultando em -9', ()=>{
        let resultado = calculadora.subtracao(-4,5)
        expect(resultado).to.be.eq(-9)
    })
})

describe('Testes de divisão',()=>{
    it('Deve dividir 4 por 2 resultando em 2', ()=>{
        let resultado = calculadora.divisao(4,2)
        expect(resultado).to.be.eq(2)
    })
    it('Deve dividir 5 por 2 resultando em 2.5', ()=>{
        let resultado = calculadora.divisao(5,2)
        expect(resultado).to.be.eq(2.5)
    })
    it('Deve dividir -4 por 2 resultando em -2', ()=>{
        let resultado = calculadora.divisao(-4,2)
        expect(resultado).to.be.eq(-2)
    })
})

describe('Testes de multiplicação',()=>{
    it('Deve multiplicar 4 por 5 resultando em 20', ()=>{
        let resultado = calculadora.multiplicacao(4,5)
        expect(resultado).to.be.eq(20)
    })
    it('Deve multiplicar -4 por 5 resultando em -20', ()=>{
        let resultado = calculadora.multiplicacao(-4,5)
        expect(resultado).to.be.eq(-20)
    })
    it('Deve multiplicar 2.5 por 2 resultando em 5', ()=>{
        let resultado = calculadora.multiplicacao(2.5,2)
        expect(resultado).to.be.eq(5)
    })
})

describe('Testes de fatorial',()=>{
    it('Deve realizar o fatorial de 5 resultando em 120', ()=>{
        let resultado = calculadora.fatorial(5)
        expect(resultado).to.be.eq(120)
    })
})

describe('Testes de potenciação',()=>{
    it('Deve elevar 5 a 2 resultando em 25', ()=>{
        let resultado = calculadora.potenciacao(5, 2)
        expect(resultado).to.be.eq(25)
    })
})