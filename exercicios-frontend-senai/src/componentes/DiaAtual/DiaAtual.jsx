import './DiaAtual.css'

let data_atual = new Date()
let dia = data_atual.getDate()
const DiaAtual = () => {
    return <>
    <div className='diaAtual'>
        {dia}
    </div>
    </>
}

export default DiaAtual;