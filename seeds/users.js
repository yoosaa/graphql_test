
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Catherine', age: 4},
        {id: 2, name: 'Mike'     , age: 8},
        {id: 3, name: 'Gonzales' , age: 16},
        {id: 4, name: 'Nancy'    , age: 32},
        {id: 5, name: 'Daniel'   , age: 64},
      ]);
    });
};
