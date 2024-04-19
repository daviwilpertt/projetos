import './MesAtual.css'

let data_atual = new Date()
let mes = data_atual.getMonth()

const MesAtual = () => {
    return <>
        <div className='mesAtual'>
            {mes + 1}
    </div>
    </>
}

export default MesAtual
