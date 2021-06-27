const sqlite3 = require("sqlite3");
//importa só open de sqlite e coloca numa const open
const { open } = require("sqlite");

module.exports = () => 
    open({
        //caminho do banco de dados - rocketq é o nome do banco
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });
