import './Calculadora.css'

const Calculadora = (props) => {
    let num1 = Number(props.num1)
    let num2 = Number(props.num2)
    let operacao = props.operacao
    let total
    
    switch (operacao) {
        case '+':
            total = num1 + num2
            break;
        case '-':
            total = num1 - num2
            break;
        case '*':
            total = num1 * num2
            break;
        case '/':
            total = num1 / num2
            break;
        default: 'operação inválida'
            break;
    }
    return <div className='calculadora'>
        {num1} {operacao} {num2} = {total}
    </div>
}

export default Calculadora