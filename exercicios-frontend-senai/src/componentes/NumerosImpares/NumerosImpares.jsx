import './NumerosImpares.css'

const NumerosImpares = (props) => {

    let numeros = props.numeros

    return <div className='numerosImpares'>
        <ul>
            {numeros.filter(numero => numero % 2 === 1).map((numero, index) => (
                <li key={index}>{numero}</li>
                ))}

        </ul>
    </div>
}

export default NumerosImpares