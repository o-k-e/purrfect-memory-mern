import { useState, useEffect } from 'react';
import UserScore from './UserScore.jsx';
import Navbar from './Navbar.jsx';
// import '../navbar.css'
import '../scoreboard.css';

const FIRST_PLACE_MEDAL = '🥇';
const SECOND_PLACE_MEDAL = '🥈';
const THIRD_PLACE_MEDAL = '🥉';

function Scoreboard() {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		async function getUsersSortedByScore() {
			const users = await (await fetch('/api/users/scored')).json();
			setUsers(users);
		}
		getUsersSortedByScore();
	}, []);

	console.log(users);

	if (!users) {
		return (
			<div className="flex justify-center items-center h-screen">Loading</div>
		);
	}

	return (
		<>
			<Navbar />
			<div className="flex flex-col items-center justify-center mt-10">
				<h1 className="text-3xl font-bold text-gray-700 mb-6">Scoreboard</h1>
				<div className="overflow-x-auto w-full max-w-4xl">
					<table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
						<thead style={{ backgroundColor: '#F0CDCC' }}>
							<tr>
								<th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">
									#
								</th>
								<th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">
									Name
								</th>
								<th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">
									Best time
								</th>
								<th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">
									Medal
								</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<UserScore
									key={user['_id']}
									rank={index + 1}
									name={user.name}
									score={user.score}
									medals={[
										FIRST_PLACE_MEDAL,
										SECOND_PLACE_MEDAL,
										THIRD_PLACE_MEDAL,
									]}
								/>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Scoreboard;
