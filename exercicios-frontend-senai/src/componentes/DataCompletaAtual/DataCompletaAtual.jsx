import './DataCompletaAtual.css'

let data_atual = new Date();
let dia = data_atual.getDate()
let mes = data_atual.getMonth()
let ano = data_atual.getFullYear()
let hora = data_atual.getHours()
let minuto = data_atual.getMinutes()

const DataCompletaAtual = () => {
    return <div className='dataCompleta'>
        {dia} / {mes + 1} / {ano}  {hora}:{minuto}
    </div>
}

export default DataCompletaAtual