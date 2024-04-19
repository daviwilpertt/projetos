import './AnoAtual.css'

let data_atual = new Date()
let ano = data_atual.getFullYear()

const AnoAtual = () => {
    return <>
        <div className='anoAtual'>
            {ano}
    </div>
    </>
}

export default AnoAtual