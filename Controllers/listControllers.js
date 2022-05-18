const { Task } = require('../models');

const getAllList = async (_req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: 'Not Fount List' });
  }
};

module.exports = { getAllList };
