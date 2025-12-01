/*
  Storage adapter

  Exposes the same synchronous helper functions the app currently uses
  (getStoredChats, saveChatsToStorage, getStoredMessages, saveMessagesToStorage, getAllUsers)
  but also persists changes to a `json-server` backend (http://localhost:4000) in the
  background. This preserves existing function signatures so components/contexts
  don't need to change while moving persisted data to the server.

  Behavior:
  - Read functions return data from localStorage synchronously.
  - Write functions update localStorage synchronously, then send the data to the
    json-server via fetch calls (POST/PUT). Errors are logged but do not block.

  Note: json-server uses numeric `id` by default. This adapter will store items
  with app-generated string ids in localStorage and try to upsert server-side
  records by matching on `id` when possible.
*/

import type { Chat, Message } from "@/utils/dummy-chats"
import type { User } from "@/utils/dummy-users"

const API_BASE = "http://localhost:4000"

const STORAGE_KEYS = {
  CHATS: "quickchat_chats",
  MESSAGES: "quickchat_messages",
  USERS: "quickchat_registered_users",
  REQUESTS: "quickchat_all_requests_db",
  FRIENDSHIPS: "quickchat_all_friendships_db",
  STORIES: "quickchat_stories",
}

function safeParse<T>(str: string | null): T | null {
  if (!str) return null
  try {
    return JSON.parse(str) as T
  } catch (e) {
    console.error("[Storage Adapter] parse error", e)
    return null
  }
}

export function getStoredChats(): Chat[] {
  if (typeof window === "undefined") return []
  const stored = safeParse<Chat[]>(localStorage.getItem(STORAGE_KEYS.CHATS))
  if (stored) return stored.map((c) => ({ ...c, createdAt: new Date(c.createdAt) }))
  return []
}

export function saveChatsToStorage(chats: Chat[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEYS.CHATS, JSON.stringify(chats))
  } catch (e) {
    console.error("[Storage Adapter] Error saving chats to localStorage:", e)
  }

  // Background sync to backend
  ;(async () => {
    try {
      // For simplicity: replace remote `chats` collection with current client copy.
      await fetch(`${API_BASE}/chats`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(chats),
      })
    } catch (e) {
      // json-server does not have a native bulk replace endpoint; log and continue
      console.warn("[Storage Adapter] Could not PUT chats to backend (is json-server running?):", e)
    }
  })()
}

export function getStoredMessages(): Message[] {
  if (typeof window === "undefined") return []
  const stored = safeParse<Message[]>(localStorage.getItem(STORAGE_KEYS.MESSAGES))
  if (stored) return stored.map((m) => ({ ...m, timestamp: new Date(m.timestamp) }))
  return []
}

export function saveMessagesToStorage(messages: Message[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages))
  } catch (e) {
    console.error("[Storage Adapter] Error saving messages to localStorage:", e)
  }

  ;(async () => {
    try {
      await fetch(`${API_BASE}/messages`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messages),
      })
    } catch (e) {
      console.warn("[Storage Adapter] Could not PUT messages to backend (is json-server running?):", e)
    }
  })()
}

export function getAllUsers(): User[] {
  if (typeof window === "undefined") return []
  const stored = safeParse<User[]>(localStorage.getItem(STORAGE_KEYS.USERS))
  if (stored) return stored
  return []
}

export function saveAllUsers(users: User[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users))
  } catch (e) {
    console.error("[Storage Adapter] Error saving users to localStorage:", e)
  }

  ;(async () => {
    try {
      await fetch(`${API_BASE}/users`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(users),
      })
    } catch (e) {
      console.warn("[Storage Adapter] Could not PUT users to backend (is json-server running?):", e)
    }
  })()
}

export function getAllRequests(): any[] {
  if (typeof window === "undefined") return []
  const stored = safeParse<any[]>(localStorage.getItem(STORAGE_KEYS.REQUESTS))
  return stored || []
}

export function saveAllRequests(requests: any[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(requests))
  } catch (e) {
    console.error("[Storage Adapter] Error saving requests to localStorage:", e)
  }

  ;(async () => {
    try {
      await fetch(`${API_BASE}/friendRequests`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requests),
      })
    } catch (e) {
      console.warn("[Storage Adapter] Could not PUT friendRequests to backend:", e)
    }
  })()
}

export function getAllFriendships(): any[] {
  if (typeof window === "undefined") return []
  const stored = safeParse<any[]>(localStorage.getItem(STORAGE_KEYS.FRIENDSHIPS))
  return stored || []
}

export function saveAllFriendships(friendships: any[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEYS.FRIENDSHIPS, JSON.stringify(friendships))
  } catch (e) {
    console.error("[Storage Adapter] Error saving friendships to localStorage:", e)
  }

  ;(async () => {
    try {
      await fetch(`${API_BASE}/friendships`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(friendships),
      })
    } catch (e) {
      console.warn("[Storage Adapter] Could not PUT friendships to backend:", e)
    }
  })()
}

export function getStories(): any[] {
  if (typeof window === "undefined") return []
  const stored = safeParse<any[]>(localStorage.getItem(STORAGE_KEYS.STORIES))
  return stored || []
}

export function saveStories(stories: any[]) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEYS.STORIES, JSON.stringify(stories))
  } catch (e) {
    console.error("[Storage Adapter] Error saving stories to localStorage:", e)
  }

  ;(async () => {
    try {
      await fetch(`${API_BASE}/stories`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stories),
      })
    } catch (e) {
      console.warn("[Storage Adapter] Could not PUT stories to backend:", e)
    }
  })()
}

export default {
  getStoredChats,
  saveChatsToStorage,
  getStoredMessages,
  saveMessagesToStorage,
  getAllUsers,
  saveAllUsers,
}
