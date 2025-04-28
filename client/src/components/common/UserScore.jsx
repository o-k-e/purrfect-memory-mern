function UserScore({ rank, name, score, medals }) {
  const medal = medals[rank - 1] || '';

    return (
      <tr className="border-b border-gray-300 last:border-none">
        <td className="py-4 px-6 text-center">{rank}.</td>
        <td className="py-4 px-6 text-center">{name}</td>
        <td className="py-4 px-6 text-center">{score}</td>
        <td className="py-4 px-6 text-center">{medal}</td>
      </tr>
    );
  }
  
  export default UserScore;