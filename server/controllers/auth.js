const User = require('../models/Users')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existinguser = await User.findOne({ $or: [{ email }, { username }] });

    if (existinguser) {
      return res.status(400).json({message: 'User already Exists'});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedpassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: 'Invalid Email credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).json({ message: 'Invalid Password credentials' });
    }

    res.status(200).json({ message: 'LogIn Succesfull', user: user.username });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { registerUser, loginUser };