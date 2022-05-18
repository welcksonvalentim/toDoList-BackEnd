const listServices = require('../services/listServices');

const getList = async (_req, res) => {
  try {
    const tasks = await listServices.getAllList();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: 'Not Fount List' });
  }
};

const getListUpdate = async (req, res) => {
  try {
    const {id, description, status, priority} = req.body;
    const tasks = await listServices.getOne(id, description, status, priority);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: 'Not Fount Task' });
  }
};

module.exports = { getList, getListUpdate };
