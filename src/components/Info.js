import { v4 as uuidv4 } from 'uuid'
import { GoRepo, GoGist } from 'react-icons/go'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
import { colors } from './../utils'
import { useGithub } from './../context/GithubContext'
import InfoCard from './InfoCard'

export default function Info() {
  const { githubUser } = useGithub()

  const { public_repos, followers, following, public_gists } = githubUser
  const cards = [
    {
      id: uuidv4(),
      icon: <GoRepo size={30} color={'#fff'} />,
      label: 'repos',
      value: public_repos,
      color: 'bg-rose-400',
    },
    {
      id: uuidv4(),
      icon: <FiUsers size={30} color={'#fff'} />,
      label: 'followers',
      value: followers,
      color: 'bg-sky-400',
    },
    {
      id: uuidv4(),
      icon: <FiUserPlus size={30} color={'#fff'} />,
      label: 'following',
      value: following,
      color: 'bg-violet-400',
    },
    {
      id: uuidv4(),
      icon: <GoGist size={30} color={'#fff'} />,
      label: 'gists',
      value: public_gists,
      color: 'bg-yellow-400',
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-4">
      {cards.map(card => (
        <InfoCard key={card.id} cardData={card} />
      ))}
    </div>
  )
}
