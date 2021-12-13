const knexConfig = require('./db/knexfile');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

knex
  .from('tb_cliente')
  .select('id', 'nome')
 
knex('tb_cliente')
  .where({ id: 1 })
  .update({ nome: 'pedro' })

knex('tb_cliente')
  .insert({ nome: 'romario' })

  knex('users')
  .where({ id: 3 })
  .del()