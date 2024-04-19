import './OlaPessoa.css'

const OlaPessoa = (props) => {
    const nome = props.nome

    return <div className='olaPessoa'>
        Olá {nome}
    </div>
}

export default OlaPessoa