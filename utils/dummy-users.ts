/**
 * QuickChat - Dummy Users Data
 *
 * This file contains mock user data for development and testing.
 * In production, this would be replaced with actual API calls.
 */

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  status: "online" | "offline" | "away"
  lastSeen?: string
}

export const dummyUsers: User[] = [
  // Start with an empty seed so only users created at runtime are shown
]

const REGISTERED_USERS_KEY = "quickchat_registered_users"

/**
 * Get all registered users from localStorage
 */
export const getRegisteredUsers = (): User[] => {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(REGISTERED_USERS_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

/**
 * Save a new registered user to localStorage
 */
export const saveRegisteredUser = (user: User): void => {
  if (typeof window === "undefined") return
  const registered = getRegisteredUsers()
  // Check if user already exists
  if (!registered.find((u) => u.id === user.id || u.email === user.email)) {
    registered.push(user)
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(registered))
  }
}

/**
 * Get ALL users (dummy + registered)
 */
export const getAllUsers = (): User[] => {
  // Only return registered users. The app will display only users created at runtime.
  return getRegisteredUsers()
}

/**
 * Get user by ID (checks both dummy and registered)
 */
export const getUserById = (id: string): User | undefined => {
  return getAllUsers().find((user) => user.id === id)
}

/**
 * Get users by IDs
 */
export const getUsersByIds = (ids: string[]): User[] => {
  return getAllUsers().filter((user) => ids.includes(user.id))
}
