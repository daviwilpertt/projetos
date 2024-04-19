import './NumerosPares.css'

const NumerosPares = (props) => {
    
    let numeros = props.numeros

        return <div className='numerosPares'>
            <ul>
                {numeros.filter(numero => numero % 2 === 0).map((numero, index) => (
                    <li key={index}>{numero}</li>
                ))}
            </ul>
        </div>
        }


export default NumerosPares