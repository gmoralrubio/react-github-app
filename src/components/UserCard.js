import { BsBuilding } from 'react-icons/bs'
import { GoLocation, GoLinkExternal } from 'react-icons/go'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { useGithub } from '../context/GithubContext'
import Card from './Card'

export default function UserCard() {
  const { githubUser } = useGithub()
  const iconSize = 20
  const {
    avatar_url,
    name,
    company,
    blog,
    location,
    email,
    bio,
    twitter_username,
    html_url,
  } = githubUser

  return (
    <Card className="space-y-4">
      <div className="flex items-center border-b border-gray-300">
        <h2 className="pb-4 text-xl font-bold">User</h2>
      </div>

      <div className="flex flex-col items-center gap-6 xs:flex-row">
        <img src={avatar_url} alt={name} className="w-20 rounded-full" />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          {twitter_username && <p>@{twitter_username}</p>}
        </div>
        <a
          href={html_url}
          target="_blank"
          className="rounded-full border-2 border-emerald-500 px-6 py-2 text-sm font-bold text-emerald-500 hover:bg-emerald-50 xs:ml-auto"
        >
          View in GitHub
        </a>
      </div>

      <div className="flex flex-col items-center gap-4 xs:items-start">
        {bio && <p className="max-w-md text-center xs:text-left">{bio}</p>}
        <div className="space-y-2 text-sm">
          {company && (
            <div className="flex gap-4">
              <BsBuilding size={iconSize} color={'#6ee7b7'} />
              <p className="text-gray-600">{company}</p>
            </div>
          )}
          {location && (
            <div className="flex gap-4">
              <GoLocation size={iconSize} color={'#6ee7b7'} />
              <p className="text-gray-600">{location}</p>
            </div>
          )}
          {email && (
            <a href={`mailto:${email}`} className="flex gap-4">
              <MdOutlineAlternateEmail size={iconSize} color={'#6ee7b7'} />
              <p className="text-gray-600">{email}</p>
            </a>
          )}
          {blog && (
            <a
              href={`https://${blog}`}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4"
            >
              <GoLinkExternal size={iconSize} color={'#6ee7b7'} />
              <p className="text-gray-600">{blog}</p>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
