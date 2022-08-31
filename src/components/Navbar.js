import Card from './Card'
import { useAuth0 } from '@auth0/auth0-react'
import UserPopover from './UserPopover'
import SingleSpinner from './SingleSpinner'

export default function Navbar() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0()
  const isUser = isAuthenticated && user

  return (
    <Card className="bg-gradient-from-r mb-4 rounded-t-none bg-gradient-to-bl from-gray-900 to-gray-600 py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <h1 className="text-2xl font-bold text-white sm:text-4xl">
          GitHub User search
        </h1>
        <div className="ml-auto flex items-center">
          {isLoading && <SingleSpinner classname="ml-auto"></SingleSpinner>}
          {isUser && (
            <div className=" hidden sm:flex sm:items-center sm:gap-8">
              <UserPopover user={user} />
              <button
                className="text-white hover:underline "
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
