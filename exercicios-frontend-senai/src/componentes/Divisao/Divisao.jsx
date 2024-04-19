import './Divisao.css'

const Divisao = (props) => {
    let num1 = Number(props.num1)
    let num2 = Number(props.num2)
    let total = num1 / num2
    
    return <div className='divisao'>
        {num1} / {num2} = {total}
    </div>
}

export default Divisao