
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tb_cliente').del()
    .then(function () {
      // Inserts seed entries
      return knex('tb_cliente').insert([
        {id: 1, nome: 'Jose'},
        {id: 2, nome: 'Maria'},
        {id: 3, nome: 'Joao'},
        {id: 4, nome: 'Ana'}
      ]);
    });
};
