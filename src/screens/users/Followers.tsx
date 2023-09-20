import { useOutletContext } from 'react-router-dom'

interface IFollwersInterFace {
  nameOfMyUser: string
}

const Followers = () => {
  // context로 받은 것을 가져오기
  const { nameOfMyUser } = useOutletContext<IFollwersInterFace>()

  return <h1>Here are {nameOfMyUser}'s Followers</h1>
}

export default Followers
