import { config } from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import User from './model/User.js';

config();

const app = express();

app.use(express.json());

async function main() {
	await mongoose.connect(process.env.DATABASE_URL);

	// ADD NEW USER
	app.post('/api/users', async (req, res) => {

		try {
			const newUser = await User.create({
				name: req.body.name,
				password: req.body.password,
				score: 0,
				createdAt: Date.now(),
			});
			res.json(newUser);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.json({ message: 'Server error, unable to register new user' });
		}
	});

	app.get('/api/users', async (req, res) => {
		try {
			const users = await User.find({});
			const sortedUsers = [...users].sort((a, b) => a.score - b.score);
			res.json(sortedUsers);
		} catch (error) {
			console.error(error);
		}
	});

	app.get('/api/users/scored', async (req, res) => {
		try {
			const users = await User.find({});
			const sortedUsers = [...users].sort((a, b) => a.score - b.score);
			const usersWithScores = sortedUsers.filter((user) => user.score > 0);
			res.json(usersWithScores);
		} catch (error) {
			console.error(error);
		}
	});

	//FIND LOGGED IN USER
	app.post('/api/user', async (req, res) => {

		try {
			const user = await User.findOne({
				name: req.body.name,
				password: req.body.password,
			});
			if (user) {
				res.json({ success: true, user: user });
			} else {
				res.json({ success: false, message: 'User not found.' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json('Server error, unable to login user');
		}
	});

	//DELETE USER ACCOUNT
	app.delete(`/api/user/:id`, async (req, res) => {

		try {
			const result = await User.deleteOne({ _id: req.params.id });
			if (result.deletedCount === 1) {
				res.json({ success: true, message: 'User deleted successfully' });
			} else {
				res.status(404).json({ success: false, message: 'User not found.' });
			}
		} catch (error) {
			console.error('Error deleting user:', error);
			res.status(500).json({ success: false, message: error.message });
		}
	});


    //UPDATE USER 
	app.patch('/api/user/:id', async (req, res) => {

        try {
            const updateUser = await User.findById(req.params.id, {
                ...req.body,
                updatedAt: Date.now(),
            });
            res.json('Updated user: ', updateUser);
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
	});

	app.listen(3000, () =>
		console.log({ message: 'Server is running on port 3000' })
	);
}

main();
