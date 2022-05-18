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

const createOne = async (description, status, priority) => {
  const data = new Date();
  const task = await List.createOne({ description, status, data, priority });
  if (!task) return null;
  return task;
};
  
const deleteOne = async (id) => {
  const task = await List.destroydestroy({ where: { id }});
  if (!task) return null;
  return task;
};

module.exports = { getAllList, getOne, createOne, deleteOne };
