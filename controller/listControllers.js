const { getAllList } = require('../services');

const getList = async (_req, res) => {
  try {
    const tasks = await getAllList();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: 'Not Fount List' });
  }
};

module.exports = { getList };
