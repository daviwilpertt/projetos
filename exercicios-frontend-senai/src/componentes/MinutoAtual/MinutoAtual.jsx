import './MinutoAtual.css'

let data_atual = new Date()
let minuto = data_atual.getMinutes()

const MinutoAtual = () => {
    return <div className='minutoAtual'>
        {minuto}
    </div>
}

export default MinutoAtual