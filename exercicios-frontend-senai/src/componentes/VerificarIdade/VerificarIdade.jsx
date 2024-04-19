import './VerificarIdade.css'

const VerificarIdade = (props) => {
    let idade = props.idade

    if (idade >= 18) {
        return <div className='maior'>
            {idade} anos, é maior de idade
        </div>
    }
    else {
        return <div className='menor'>
            {idade} anos, é menor de idade
        </div>
    }
}

export default VerificarIdade