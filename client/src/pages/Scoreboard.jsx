import { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar.jsx';
import UserScore from '../components/common/UserScore.jsx';

const FIRST_PLACE_MEDAL = '🥇';
const SECOND_PLACE_MEDAL = '🥈';
const THIRD_PLACE_MEDAL = '🥉';

function Scoreboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users/scored');
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    }
    fetchUsers();
  }, []);

  if (!users.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-50 min-h-screen pt-10">
        <h1 className="text-3xl font-bold text-gray-700 py-10">Scoreboard</h1>
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#F0CDCC]">
              <tr>
                <th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">#</th>
                <th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">Name</th>
                <th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">Best Time</th>
                <th className="py-3 px-6 text-gray-700 text-sm font-bold text-center">Medal</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserScore
                  key={user._id}
                  rank={index + 1}
                  name={user.name}
                  score={user.score}
                  medals={[FIRST_PLACE_MEDAL, SECOND_PLACE_MEDAL, THIRD_PLACE_MEDAL]}
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