import './TamanhoTexto.css'

const TamanhoTexto = (props) => {
    let texto = props.texto
    let tamanho = texto.length

    return <div className='tamanhoTexto'>
        O texto '{texto}' tem {tamanho} caracteres.
    </div>
}

export default TamanhoTexto