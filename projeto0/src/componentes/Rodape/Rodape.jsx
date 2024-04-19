import './Rodape.css'

const Rodape = () => {
    const ano_atual = new Date().getFullYear();

    return <>
        <footer>
            <p>
                Copyright @ {ano_atual} - Todos os direitos reservados - Davi de Souza
            </p>
        </footer>
    </>
}

export default Rodape