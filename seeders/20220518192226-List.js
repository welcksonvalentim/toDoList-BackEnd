module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'List',
    [
      {
        descritpion: 'Estudar MongoDb',
        status: 'Em andamento',
        date: new Date(),
        priority: 'Alta',
      },
      {
        descritpion: 'Estudar Java',
        status: 'Em andamento',
        date: new Date(),
        priority: 'Muito Alta',
      },
      {
        descritpion: 'Organizar guarda roupas',
        status: 'Pendente',
        date: new Date(),
        priority: 'Média',
      },
      {
        descritpion: 'Organizar varanda',
        status: 'Pendente',
        date: new Date(),
        priority: 'Baixa',
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('List', null, {}),
};
