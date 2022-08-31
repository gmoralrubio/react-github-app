import Info from './../components/Info'
import Navbar from './../components/Navbar'
import Repos from './../components/Repos'
import Search from './../components/Search'
import User from '../components/User'
import ModalSpinner from '../components/ModalSpinner'
import { useGithub } from '../context/GithubContext'
import Card from './../components/Card'

export default function Dashboard() {
  const { githubUser, repos, followers, isLoading } = useGithub()
  const githubUserData = githubUser && repos && followers
  return (
    <div className="relative mb-10 flex flex-col gap-4 px-4 ">
      <Navbar />
      {isLoading && <ModalSpinner />}
      <Search />
      {githubUserData && (
        <>
          <Info />
          <User />
          {repos.length !== 0 && <Repos />}
        </>
      )}
      {!githubUserData && (
        <Card>
          {' '}
          <p className="text-xl font-bold">Please search for an user</p>
        </Card>
      )}
    </div>
  )
}
