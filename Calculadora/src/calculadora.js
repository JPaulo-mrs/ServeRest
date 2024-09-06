
export default class Calculadora{
    static soma(a,b)
    {
        if(typeof a === 'number' && typeof b === 'number') return a+b;
        else return 'Tipo da variável não é numérico';
        
    }
    static subtracao(a,b)
    {
        if(typeof a === 'number' && typeof b === 'number') return a-b;
        else return 'Tipo da variável não é numérico';
    }
    static divisao(a,b)
    {
        if(typeof a === 'number' && typeof b === 'number') return a/b;
        else return 'Tipo da variável não é numérico';
    }
    static multiplicacao(a,b)
    {
        if(typeof a === 'number' && typeof b === 'number') return a*b;
        else return 'Tipo da variável não é numérico';
    }
    static fatorial(a)
    {
        if(typeof a === 'number')
        {
            if(a!==1)
            {
                return a*this.fatorial(a-1);
            }
            else
            {
                return a;
            }
        }
        else return 'Tipo da variável não é numérico';
    }
    static potenciacao(a, b) {
        let resultado = 1;
        if(typeof a === 'number' && typeof b === 'number')
        {
            for (let i = 0; i < b; i++) {
                resultado *= a;
            }
            return resultado;
        }
        else return 'Tipo da variável não é numérico';
    }
}