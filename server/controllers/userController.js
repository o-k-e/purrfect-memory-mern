import User from '../model/User.js';

// Register new user
export async function registerUser(req, res) {
  try {
    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      score: 0,
      createdAt: Date.now(),
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error: Unable to register new user.' });
  }
}

// Get all users
export async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    const sortedUsers = users.sort((a, b) => a.score - b.score);
    res.status(200).json(sortedUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error: Unable to fetch users.' });
  }
}

// Get users with scores > 0
export async function getUsersWithScores(req, res) {
  try {
    const users = await User.find({});
    const sortedUsers = users.sort((a, b) => a.score - b.score);
    const usersWithScores = sortedUsers.filter(user => user.score > 0);
    res.status(200).json(usersWithScores);
  } catch (error) {
    console.error('Error fetching scored users:', error);
    res.status(500).json({ message: 'Server error: Unable to fetch scored users.' });
  }
}

// Login user
export async function loginUser(req, res) {
  try {
    const user = await User.findOne({
      name: req.body.name,
      password: req.body.password,
    });

    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(404).json({ success: false, message: 'User not found.' });
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Server error: Unable to login user.' });
  }
}

// Delete user
export async function deleteUser(req, res) {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 1) {
      res.status(200).json({ success: true, message: 'User deleted successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'User not found.' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, message: 'Server error: Unable to delete user.' });
  }
}

// Update user
export async function updateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ success: false, message: 'User not found.' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, message: 'Server error: Unable to update user.' });
  }
}