import './ListaProdutos.css'

const ListaProdutos = (props) => {
    let item = props.item
    return <div className='listaProdutos'>
        <ul>
            <li>{item}</li>
        </ul>
    </div>
}

export default ListaProdutos