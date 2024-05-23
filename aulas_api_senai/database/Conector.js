import mysql from 'mysql2'
const bdConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'senai',
    database: 'teste_sa'
}

class Conector {
    async getConexao() {
        if (!Conector.conexao) {
            Conector.conexao =  mysql.createConnection(bdConfig)
        }
        return Conector.conexao
    }
}


export default Conector