const { List } = require('../models');

const getAllList = async () => {
  const tasks = await List.findAll();
  if (!tasks) return null;
  return tasks;
};

module.exports = { getAllList };
