import argon2 from 'argon2';

import { User } from '../models/userModel.js';

export const signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await argon2.hash(password);
    const user = await User.create({ username, password: hashedPassword });
    req.session.user = user;
    res.status(201).json({
      status: 'success',
      data: {
        username: user.username,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const sess = req.session;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(404).json({
        status: 'not found',
      });

      return;
    }

    const isPasswordCorrect = await argon2.verify(user.password, password);

    if (!isPasswordCorrect) {
      res.status(400).json({
        sataus: 'incorrect password',
      });

      return;
    }

    req.session.user = user;
    res.status(200).json({
      status: 'success',
      data: {
        username: user.username,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
    });
  }
};
