function UserScore({ rank, name, score, medals }) {
    return (
      <tr className="border-b border-gray-300 last:border-none">
        <td className="py-4 px-6 text-center">{rank}.</td>
        <td className="py-4 px-6 text-center">{name}</td>
        <td className="py-4 px-6 text-center">{score}</td>
        <td className="py-4 px-6 text-center">
          {rank === 1 && medals[0]}
          {rank === 2 && medals[1]}
          {rank === 3 && medals[2]}
        </td>
      </tr>
    );
  }
  
  export default UserScore;