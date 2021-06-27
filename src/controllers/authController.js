import argon2 from 'argon2';

import { User } from '../models/userModel.js';

export const signUp = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await argon2.hash(password);

  try {
    const user = await User.create({ username, password: hashedPassword });
    res.status('201').json({
      status: 'success',
      data: {
        username: user.username,
      },
    });
  } catch (e) {
    res.status('400').json({
      status: 'fail',
    });
  }
};
