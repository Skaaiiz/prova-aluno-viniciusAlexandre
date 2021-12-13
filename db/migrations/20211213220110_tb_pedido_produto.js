
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_pedido_produto', (table) => {
        table.integer('id') 
        table.integer('pedido_id')
        table.integer('produto_id')
        table.integer('quantidade')
        table.string('valor_item')
        table.foreign('pedido_id').references('tb_pedido.id')
        table.foreign('produto_id').references('tb_produto.id')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('tb_pedido_produto')
  };
  