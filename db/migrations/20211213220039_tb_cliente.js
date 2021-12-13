
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_cliente', (table) => {
        table.integer('id') 
        table.string('nome')
      
        table.primary('id')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('tb_cliente')
  };
  