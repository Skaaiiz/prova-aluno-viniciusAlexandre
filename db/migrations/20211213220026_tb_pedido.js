
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_pedido', (table) => {
        table.integer('id') 
        table.string('data_pedido')
        table.integer('cliente_id')
        table.primary('id')
        table.foreign('cliente_id').references('tb_cliente.id')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('tb_pedido')
  };
  