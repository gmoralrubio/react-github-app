import { useGithub } from '../context/GithubContext'
import Card from './Card'
import { useState } from 'react'
import FollowerItem from './FollowerItem'

export default function FollowersCard() {
  const { followers } = useGithub()

  return (
    <Card className="space-y-4 overflow-hidden">
      <div className="flex items-center border-b border-gray-300 ">
        <h2 className="pb-4 text-xl font-bold">Followers</h2>
      </div>

      <div className="flex max-h-80 flex-col overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-500">
        {followers &&
          followers.map(follower => (
            <FollowerItem key={follower.id} follower={follower} />
          ))}
      </div>
    </Card>
  )
}
