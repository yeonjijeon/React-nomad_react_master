import { users } from '../db'
import { Link, useSearchParams } from 'react-router-dom'

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams()
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
