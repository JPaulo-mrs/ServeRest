
export default class calculadora{
    static soma(a,b)
    {
        return a+b;
    }
    static subtracao(a,b)
    {
        return a-b;
    }
    static divisao(a,b)
    {
        return a/b;
    }
    static multiplicacao(a,b)
    {
        return a*b;
    }
    static fatorial(a)
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
    static potenciacao(a, b) {
        let resultado = 1;
        for (let i = 0; i < b; i++) {
            resultado *= a;
        }
        return resultado;
    }
}