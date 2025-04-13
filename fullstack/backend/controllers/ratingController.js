const { Rating } = require('../models');

exports.submitRating = async (req, res) => {
  try {
    const { storeId, rating } = req.body;
    const existing = await Rating.findOne({
      where: { storeId, userId: req.user.id },
    });

    if (existing) {
      existing.rating = rating;
      await existing.save();
      return res.json({ message: 'Rating updated', rating: existing });
    }

    const newRating = await Rating.create({
      userId: req.user.id,
      storeId,
      rating,
    });

    res.status(201).json(newRating);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
