import PropTypes from 'prop-types'
import { AuthContext } from "../../contexts/AuthContext"
import { httpClient } from '../../services/axios'
import { useEffect, useState } from 'react'
import { setStorage } from '../../helperFunctions/storage/setStorage'
import { getStorage } from '../../helperFunctions/storage/getStorage'
import { revemoStorage } from '../../helperFunctions/storage/revemoStorage'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const login = async (data) => {
    const { data: respData } = await httpClient.post('/auth/login', data)
    const token = respData.token
    
    setStorage('token', token)

    const res = await httpClient.get('/users/me')
    const userName = res.data
    setUser(userName)
    setStorage('user', userName)
  }

  const logout = async () => {
    setUser(null)
    revemoStorage('token', 'user')
  }

  useEffect(() => {
    const savedUser = getStorage('user')

    if (savedUser) {
      setUser(savedUser)
    }

    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}