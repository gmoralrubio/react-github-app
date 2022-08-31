import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const GithubContext = React.createContext()

export const useGithub = () => {
  return useContext(GithubContext)
}

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState()
  const [repos, setRepos] = useState()
  const [followers, setFollowers] = useState()
  const [request, setRequest] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  useEffect(() => {
    checkRequest()
  }, [])

  const fetchUser = async user => {
    toggleError()
    setIsLoading(true)

    const response = await axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user}`)
      .catch(err => console.log(err))

    if (response) {
      setGithubUser(response.data)
      const { login, followers_url } = response.data
      const reposRequest = axios.get(
        `${process.env.REACT_APP_API_URL}/users/${login}/repos?per_page=${process.env.REACT_APP_REPOS_PER_PAGE}`
      )

      const followersRequest = axios.get(
        `${followers_url}?per_page=${process.env.REACT_APP_FOLLOWERS_PER_PAGE}`
      )

      await Promise.allSettled([reposRequest, followersRequest])
        .then(result => {
          const [repos, followers] = result
          if (repos.status === 'fulfilled') setRepos(repos.value.data)
          if (followers.status === 'fulfilled')
            setFollowers(followers.value.data)
        })
        .catch(err => console.log(err))
    } else {
      toggleError(true, 'There is no user with that username')
    }

    checkRequest()
    setIsLoading(false)
  }

  const checkRequest = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/rate_limit`)
      .then(response => {
        if (response.data.rate.remaining === 0) {
          toggleError(true, 'Sorry, you are exceeded your hourly rate limit!')
        } else {
          setRequest(response.data.rate.remaining)
        }
      })
      .catch(err => console.log(err))
  }

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg })
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        request,
        error,
        isLoading,
        setError,
        fetchUser,
        setIsLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
