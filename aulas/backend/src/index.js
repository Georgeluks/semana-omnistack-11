const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Metodos HTTP
 * 
 * GET: Buscar/listar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

 /**
  * Tipos de Parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginacao)
  * Route params: parametros utilizados para identificar recursos
  * Request Body: o corpo da requisicao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users).select('*').where()
     */


app.listen(3333);