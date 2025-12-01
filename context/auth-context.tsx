"use client"

/**
 * QuickChat - Authentication Context
 *
 * Manages user authentication state throughout the application.
 * Uses dummy authentication for development - easily replaceable with real auth.
 */

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import type { User } from "@/utils/dummy-users"
import { getAllUsers, saveAllUsers } from "@/lib/storage-adapter"

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Skip auto-login - user must explicitly login
  useEffect(() => {
    setIsLoading(false)
  }, [])

  /**
   * Login function - authenticates user with email/password
   * In production, this would call a real authentication API
   */
  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    const allUsers = getAllUsers()
    const foundUser = allUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (foundUser && password.length >= 6) {
      const loggedInUser = { ...foundUser, status: "online" as const }
      setUser(loggedInUser)
      localStorage.setItem("quickchat_user", JSON.stringify(loggedInUser))
      setIsLoading(false)
      return true
    }

    setError("Invalid email or password")
    setIsLoading(false)
    return false
  }, [])

  /**
   * Register function - creates new user account
   * In production, this would call a real registration API
   */
  const register = useCallback(async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    const allUsers = getAllUsers()
    const existingUser = allUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())

    if (existingUser) {
      setError("Email already registered")
      setIsLoading(false)
      return false
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return false
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      avatar: `/placeholder.svg?height=40&width=40&query=${encodeURIComponent(name)} avatar`,
      status: "online",
    }

    // persist via storage adapter
    const updated = [...allUsers, newUser]
    saveAllUsers(updated)

    setUser(newUser)
    localStorage.setItem("quickchat_user", JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }, [])

  /**
   * Logout function - clears user session
   */
  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem("quickchat_user")
  }, [])

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * Custom hook to access auth context
 */
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
