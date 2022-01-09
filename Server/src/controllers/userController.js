import User from '../models/user.js';

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.id });
    if (!user) {
      res.status(204).json({ success: true, user: null });
    } else {
      res.status(200).json({ success: true, user });
    }
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    let user = await User.findOne({ userId: req.body.userId });
    if (!user) {
      user = await User.create(req.body);
    }
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(409).json({ success: false, message: error.message });
  }
};
