const { Car } = require('../models');

const getAllList = async (_req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(404).json({ message: 'Not Fount List' });
  }
};

module.exports = { getAllList };
