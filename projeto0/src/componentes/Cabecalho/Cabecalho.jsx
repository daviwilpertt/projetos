import './Cabecalho.css'
import Avatar from '../Avatar/Avatar.jsx'
const Cabecalho = () => {
    return <>
        <header>
            <img className='avatar' src="/vite.svg" alt="" />
            <Avatar nome='Davi Wilpert'/>
        </header>
    </>
};

export default Cabecalho;


