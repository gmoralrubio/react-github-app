import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="flex h-screen justify-center">
      <div className="relative flex flex-col items-center">
        <h1 className="relative z-50 mt-40 text-center text-8xl font-bold after:absolute after:left-0 after:top-10 after:-z-10 after:h-8 after:w-full after:bg-yellow-400">
          Github
        </h1>
        <h1 className="relative z-50 text-center text-8xl font-bold after:absolute after:left-0 after:top-10 after:-z-10 after:h-8 after:w-full after:bg-yellow-400">
          user
        </h1>
        <Link
          to="/"
          className="mt-10 rounded-full bg-emerald-500 px-8 py-2 text-lg font-bold text-white hover:bg-emerald-600"
          onClick={() => loginWithRedirect()}
        >
          Login / Sign up
        </Link>
      </div>
    </div>
  )
}
