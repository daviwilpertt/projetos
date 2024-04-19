import './NomesOrdenados.css'

const NomesOrdenados = (props) => {
    let nomes = props.nome

    return <div className='nomes'>
        <ol>
        {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
                </ol>
    </div>
}

export default NomesOrdenados