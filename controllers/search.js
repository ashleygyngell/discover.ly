import Spot from '../models/spot.js';

const searchSpots = async (req, res, next) => {
  const searchText = req.query.text;
  searchText.replace(' ', '%20');
  // const regex = new RegExp(searchText, 'i'); // i for case insensitive

  try {
    // const results = await Spot.find({ title: { $regex: regex } });
    if (searchText === '') {
      const results = await Spot.find({});
      res.status(200).json(results);
    } else {
      const results = await Spot.find({ $text: { $search: searchText } });
      res.status(200).json(results);
    }
  } catch (err) {
    next(err);
  }
};

export default {
  searchSpots,
};
