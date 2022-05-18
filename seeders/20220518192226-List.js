module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'List',
    [
      {
        description: 'Estudar MongoDb',
        status: 'Em andamento',
        date: new Date(),
        priority: 'Alta',
      },
      {
        description: 'Estudar Java',
        status: 'Em andamento',
        date: new Date(),
        priority: 'Muito Alta',
      },
      {
        description: 'Organizar guarda roupas',
        status: 'Pendente',
        date: new Date(),
        priority: 'Média',
      },
      {
        description: 'Organizar varanda',
        status: 'Pendente',
        date: new Date(),
        priority: 'Baixa',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('List', null, {}),
};
