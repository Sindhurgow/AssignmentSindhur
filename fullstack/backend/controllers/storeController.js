const { Store, Rating, User } = require('../models');
const { Op } = require('sequelize');

exports.getAllStores = async (req, res) => {
  const stores = await Store.findAll({
    include: [{ model: Rating }],
  });

  const enriched = stores.map(store => {
    const ratings = store.Ratings;
    const avg = ratings.length ? ratings.reduce((a, b) => a + b.rating, 0) / ratings.length : 0;
    const userRating = ratings.find(r => r.userId === req.user.id)?.rating || null;

    return {
      ...store.toJSON(),
      averageRating: avg.toFixed(2),
      userRating
    };
  });

  res.json(enriched);
};


exports.createStore = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const store = await Store.create({ name, email, address });
    res.status(201).json(store);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getStoreRatings = async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id, {
      include: {
        model: Rating,
        include: [User],
      },
    });
    if (!store) return res.status(404).json({ message: 'Store not found' });

    res.json(store);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
