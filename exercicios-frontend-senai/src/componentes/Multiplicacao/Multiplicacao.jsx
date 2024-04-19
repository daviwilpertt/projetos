import './Multiplicacao.css'

const Multiplicacao = (props) => {
    let num1 = Number(props.num1)
    let num2 = Number(props.num2)
    let total = num1 * num2
    
    return <div className='multiplicacao'>
        {num1} * {num2} = {total}
    </div>
}

export default Multiplicacao