// todo o arquivo que fomos trabalhar temos que realizar a importação do mongoose

const mongoose = require("mongoose")
//carregar variaveis de ambiente do arquivo .env

require("dotenv").config();

//configura o mongoose para permitir consultas restritas
mongoose.set("strictQuery",true);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


//função para conectar ao DB
async  function main() {
 
 //link
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@clusterapi.rxnae.mongodb.net/petshop?retryWrites=true&w=majority`);

 
//exibe a mensagem ao user que realizzou a conexao
console.log("Conectou ao banco de dados!")
}


//caso ocorra erro mostra uma mensagem
main().catch((err)=> console.log(err));

//exportar a function para utilizar em outro file

module.exports = main;
//
