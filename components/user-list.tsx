"use client"

import { useChat } from "@/context/chat-context"
import { useFriend } from "@/context/friend-context"
import { UserPlus, Clock, Check, MessageSquare, X, CheckCircle } from "lucide-react"
import { useState } from "react"

interface UserListProps {
  onMobileClose?: () => void
}

export function UserList({ onMobileClose }: UserListProps) {
  const { availableUsers, createDirectChat } = useChat()
  const { getRequestStatus, sendFriendRequest, cancelFriendRequest, getOutgoingRequests } = useFriend()
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ message, type })
    // Also show browser alert so user definitely sees it
    alert(message)
    setTimeout(() => setNotification(null), 5000)
  }

  const handleSendRequest = (userId: string) => {
    const user = availableUsers.find((u) => u.id === userId)
    sendFriendRequest(userId)
    showNotification(`Friend request sent to ${user?.name || "user"}!`, "success")
  }

  const handleCancelRequest = (userId: string) => {
    const outgoing = getOutgoingRequests()
    const request = outgoing.find((r) => r.toUserId === userId)
    if (request) {
      cancelFriendRequest(request.id)
      showNotification("Friend request cancelled", "success")
    }
  }

  const handleStartChat = (userId: string) => {
    createDirectChat(userId)
    onMobileClose?.()
  }

  // Group users by online status
  const onlineUsers = availableUsers.filter((u) => u.status === "online")
  const offlineUsers = availableUsers.filter((u) => u.status !== "online")

  const renderUserAction = (userId: string) => {
    const status = getRequestStatus(userId)

    switch (status) {
      case "friends":
        return (
          <button
            onClick={() => handleStartChat(userId)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-primary)] text-white rounded-full text-xs font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Chat
          </button>
        )
      case "sent":
        return (
          <button
            onClick={() => handleCancelRequest(userId)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-full text-xs font-medium hover:bg-red-100 hover:text-red-600 transition-colors group"
          >
            <Clock className="w-3.5 h-3.5 group-hover:hidden" />
            <X className="w-3.5 h-3.5 hidden group-hover:block" />
            <span className="group-hover:hidden">Pending</span>
            <span className="hidden group-hover:block">Cancel</span>
          </button>
        )
      case "received":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full text-xs font-medium">
            <Check className="w-3.5 h-3.5" />
            Respond in Requests
          </span>
        )
      default:
        return (
          <button
            onClick={() => handleSendRequest(userId)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-secondary)] text-[var(--color-foreground)] rounded-full text-xs font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            <UserPlus className="w-3.5 h-3.5" />
            Add Friend
          </button>
        )
    }
  }

  const renderUserSection = (users: typeof availableUsers, title: string, isOnline: boolean) => {
    if (users.length === 0) return null

    return (
      <div>
        <div className="px-4 py-2 bg-[var(--color-secondary)]">
          <h4 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wide">
            {title} — {users.length}
          </h4>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="w-full p-3 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors"
          >
            <div className="relative">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  isOnline ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"
                }`}
              />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-medium text-[var(--color-foreground)]">{user.name}</h3>
              <p className={`text-xs ${isOnline ? "text-[var(--color-online)]" : "text-[var(--color-muted)]"}`}>
                {isOnline ? "Online" : user.lastSeen ? `Last seen ${user.lastSeen}` : "Offline"}
              </p>
            </div>
            {renderUserAction(user.id)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="divide-y divide-[var(--color-border)]">
      {notification && (
        <div
          className={`p-3 flex items-center gap-2 ${
            notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">{notification.message}</span>
        </div>
      )}

      {availableUsers.length === 0 ? (
        <div className="p-8 text-center text-[var(--color-muted)]">
          <UserPlus className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No users found</p>
          <p className="text-sm mt-1">Invite friends to join!</p>
        </div>
      ) : (
        <>
          {renderUserSection(onlineUsers, "Online", true)}
          {renderUserSection(offlineUsers, "Offline", false)}
        </>
      )}
    </div>
  )
}
