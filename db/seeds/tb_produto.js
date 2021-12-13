
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tb_produto').del()
    .then(function () {
      // Inserts seed entries
      return knex('tb_produto').insert([
        {id: 1, descricao: 'Arroz', preco: 5.54},
        {id: 2, descricao: 'Feijao', preco: 8.90},
        {id: 3, descricao: 'Macarrao', preco: 6.00},
        {id: 4, descricao: 'Oleo de Soja', preco: 5.00},
      ]);
    });
};
