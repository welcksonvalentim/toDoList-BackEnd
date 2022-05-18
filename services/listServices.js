const { List } = require('../models');

const getAllList = async () => {
  const tasks = await List.findAll();
  if (!tasks) return null;
  return tasks;
};

const getOne = async (id, description, status, priority) => {
    const task = await List.findOne({ where: {id} });
    const updatedTask = await task.update({ description, status, priority });
    if (!updatedTask) return null;
    return updatedTask;
  };

module.exports = { getAllList, getOne };
