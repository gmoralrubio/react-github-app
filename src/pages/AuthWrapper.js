import { useAuth0 } from '@auth0/auth0-react'
import ModalSpinner from '../components/ModalSpinner'

export default function AuthWrapper({ children }) {
  const { isLoading } = useAuth0()
  if (isLoading) {
    return <ModalSpinner />
  }
  return <>{children}</>
}
