import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar.jsx';
import Button from '../components/common/Button.jsx';

function UpdatePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  async function handleUpdatePassword(event) {
    event.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem('user'));

    if (!loggedInUser) {
      alert('You must be logged in to update your password.');
      navigate('/login');
      return;
    }

    if (!currentPassword || !newPassword) {
      alert('Please fill out both password fields.');
      return;
    }

    if (currentPassword === newPassword) {
      alert('New password must be different from the current password.');
      return;
    }

    try {
      const response = await fetch(`/api/user/${loggedInUser._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: newPassword }),
      });

      if (response.ok) {
        alert('Password updated successfully. Please log in again.');
        localStorage.removeItem('user');
        navigate('/login');
      } else {
        alert('Failed to update password. Please try again.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h3 className="text-2xl font-bold mb-6">Update Password</h3>
        <form
          className="flex flex-col items-center border border-gray-300 p-6 rounded-lg bg-white w-full max-w-sm shadow-md"
          onSubmit={handleUpdatePassword}
        >
          <div className="w-full mb-4">
            <label htmlFor="current-password" className="block text-gray-700 mb-2">
              Current Password
            </label>
            <input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          <div className="w-full mb-6">
            <label htmlFor="new-password" className="block text-gray-700 mb-2">
              New Password
            </label>
            <input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>

          <Button buttonText="Update Password" type="submit" className="btn btn-primary mb-4" />

          <Link to="/user-profile" className="w-full">
            <Button buttonText="Cancel" className="btn btn-secondary" />
          </Link>
        </form>
      </div>
    </>
  );
}

export default UpdatePassword;