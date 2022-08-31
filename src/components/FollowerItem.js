import React, { useState } from 'react'
import { useGithub } from './../context/GithubContext'

export default function FollowerItem({ follower }) {
  const { fetchUser } = useGithub()
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)
  const handleClick = user => fetchUser(user)
  return (
    <div
      key={follower.id}
      className="mr-4 flex items-center gap-4 rounded-md p-4 hover:bg-slate-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={follower.avatar_url}
        alt={follower.login}
        className="w-14 rounded-full"
      />
      <div>
        <p className="font-semibold">{follower.login}</p>
        <a
          href={follower.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-600 hover:underline"
        >
          {follower.html_url}
        </a>
      </div>
      {isHover && (
        <div className="ml-auto">
          <button
            className="rounded-full border border-emerald-500 px-4 py-2 text-sm text-emerald-500 hover:bg-emerald-50"
            onClick={() => handleClick(follower.login)}
          >
            View profile
          </button>
        </div>
      )}
    </div>
  )
}
