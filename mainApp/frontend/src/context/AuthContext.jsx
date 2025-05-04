"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser, registerUser, logoutUser, getCurrentUser } from "../services/api/auth"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is already logged in
    const checkLoggedIn = async () => {
      try {
        const userData = await getCurrentUser()
        if (userData) {
          setUser(userData)
        }
      } catch (error) {
        console.error("Error checking authentication:", error)
      } finally {
        setLoading(false)
      }
    }

    checkLoggedIn()
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    try {
      const userData = await loginUser(email, password)
      setUser(userData)
      navigate("/")
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (userData) => {
    setLoading(true)
    try {
      const newUser = await registerUser(userData)
      setUser(newUser)
      navigate("/")
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await logoutUser()
      setUser(null)
      navigate("/login")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return <AuthContext.Provider value={{ user, loading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
