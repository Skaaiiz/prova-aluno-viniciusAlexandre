
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_produto', (table) => {
        table.integer('id') 
        table.string('nome')
        table.string('descricao')
        table.float('preco')
        table.primary('id')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('tb_produto')
  };
  