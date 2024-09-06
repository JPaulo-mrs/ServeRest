import assert from 'assert'
import {expect} from 'chai'
import Calculadora from '../src/calculadora.js'



describe('Testes de adição',()=>{
    it('Deve somar 4 e 5 resultando em 9', ()=>{
        let resultado = Calculadora.soma(4,5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve verificar se as variaveis são do tipo numérico', ()=>{
        let resultado = Calculadora.soma(4,'5')
        expect(resultado).to.be.eq('Tipo da variável não é numérico')
    })
})

describe('Testes de subtração',()=>{
    it('Deve subtrair 4 e 5 resultando em -1', ()=>{
        let resultado = Calculadora.subtracao(4,5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve verificar se as variaveis são do tipo numérico', ()=>{
        let resultado = Calculadora.subtracao(4,'5')
        expect(resultado).to.be.eq('Tipo da variável não é numérico')
    })
})

describe('Testes de divisão',()=>{
    it('Deve dividir 4 por 2 resultando em 2', ()=>{
        let resultado = Calculadora.divisao(4,2)
        expect(resultado).to.be.eq(2)
    })
    it('Deve dividir 5 por 2 resultando em 2.5', ()=>{
        let resultado = Calculadora.divisao(5,2)
        expect(resultado).to.be.eq(2.5)
    })
    it('Deve verificar se as variaveis são do tipo numérico', ()=>{
        let resultado = Calculadora.divisao(4,'5')
        expect(resultado).to.be.eq('Tipo da variável não é numérico')
    })
})

describe('Testes de multiplicação',()=>{
    it('Deve multiplicar 4 por 5 resultando em 20', ()=>{
        let resultado = Calculadora.multiplicacao(4,5)
        expect(resultado).to.be.eq(20)
    })
    it('Deve multiplicar -4 por 5 resultando em -20', ()=>{
        let resultado = Calculadora.multiplicacao(-4,5)
        expect(resultado).to.be.eq(-20)
    })
    it('Deve verificar se as variaveis são do tipo numérico', ()=>{
        let resultado = Calculadora.multiplicacao(4,'5')
        expect(resultado).to.be.eq('Tipo da variável não é numérico')
    })
})

describe('Testes de fatorial',()=>{
    it('Deve realizar o fatorial de 5 resultando em 120', ()=>{
        let resultado = Calculadora.fatorial(5)
        expect(resultado).to.be.eq(120)
    })
    it('Deve verificar se as variaveis são do tipo numérico', ()=>{
        let resultado = Calculadora.fatorial('5')
        expect(resultado).to.be.eq('Tipo da variável não é numérico')
    })
})

describe('Testes de potenciação',()=>{
    it('Deve elevar 5 a 2 resultando em 25', ()=>{
        let resultado = calculadora.potenciacao(5, 2)
        expect(resultado).to.be.eq(25)
    })
    it('Deve verificar se as variaveis são do tipo numérico', ()=>{
        let resultado = calculadora.potenciacao(4,'5')
        expect(resultado).to.be.eq('Tipo da variável não é numérico')
    })
})