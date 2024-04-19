import './HoraAtual.css'
let data_atual = new Date()
let hora = data_atual.getHours()

const HoraAtual = () => {
    return <div className='horaAtual'>
        {hora}
    </div>
}

export default HoraAtual