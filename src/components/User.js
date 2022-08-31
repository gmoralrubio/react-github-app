import UserCard from './UserCard'
import FollowersCard from './FollowersCard'

export default function User() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <UserCard />
      <FollowersCard />
    </div>
  )
}
