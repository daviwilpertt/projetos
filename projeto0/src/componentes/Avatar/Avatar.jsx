import './Avatar.css'

const Avatar = (props) => {
    const [nome, sobrenome] = props.nome.split(' ');

    return <div className='avatar'>
        {nome[0] + " " +  sobrenome[0]}
    </div>
}

export default Avatar