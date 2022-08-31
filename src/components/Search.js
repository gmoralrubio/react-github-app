import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { useGithub } from '../context/GithubContext'
import Card from './Card'
import Popover from './Popover'
import { useAuth0 } from '@auth0/auth0-react'

export default function Search() {
  const { isAuthenticated } = useAuth0()
  const { request, error, setError, fetchUser } = useGithub()
  const [user, setUser] = useState('')

  const handleInput = e => {
    setUser(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (user) {
      fetchUser(user)
    } else {
      setError({ show: true, msg: 'You have to type an user.' })
    }
  }

  return (
    <Card className="relative grid grid-cols-4 items-center gap-4">
      {error.show && <Popover msg={error.msg}></Popover>}
      <form className="relative col-span-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a GitHub user"
          className="form-input w-full rounded-md bg-slate-50"
          maxLength={80}
          value={user}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="absolute right-0 h-full rounded-r-md bg-emerald-500 px-4  disabled:bg-gray-300"
          disabled={request === 0 || !isAuthenticated}
        >
          <GoSearch style={{ color: '#fff' }} size={24} />
        </button>
      </form>
      <div className="ml-4 text-xl font-bold">
        <p className="mr-2 inline-block">Requests:</p>
        <span>
          {request}/{process.env.REACT_APP_MAX_REQUEST}
        </span>
      </div>
    </Card>
  )
}
