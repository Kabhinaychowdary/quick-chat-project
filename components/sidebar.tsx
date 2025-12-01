"use client"

/**
 * QuickChat - Sidebar Component
 *
 * Main navigation sidebar showing chat list, user profile,
 * and actions for creating new chats.
 */

import { useState } from "react"
import { Search, Plus, LogOut, Users, MessageSquare, UserPlus } from "lucide-react"
import { useAuth } from "@/context/auth-context"
import { useChat } from "@/context/chat-context"
import { useSocket } from "@/context/socket-context"
import { useFriend } from "@/context/friend-context"
import { formatDistanceToNow } from "date-fns"
import { UserList } from "./user-list"
import { FriendRequests } from "./friend-requests"
import { GroupCreationModal } from "./group-creation-modal"

interface SidebarProps {
  onMobileClose?: () => void
}

export function Sidebar({ onMobileClose }: SidebarProps) {
  const { user, logout } = useAuth()
  const { chats, selectedChat, selectChat, getChatName, getChatAvatar, getOtherParticipant } = useChat()
  const { isConnected } = useSocket()
  const { getIncomingRequests } = useFriend()

  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState<"chats" | "users" | "requests">("chats")
  const [showGroupModal, setShowGroupModal] = useState(false)

  // Get incoming requests count for badge
  const incomingRequestsCount = getIncomingRequests().length

  // Filter chats based on search query
  const filteredChats = chats.filter((chat) => getChatName(chat).toLowerCase().includes(searchQuery.toLowerCase()))

  // Sort chats by last message timestamp
  const sortedChats = [...filteredChats].sort((a, b) => {
    const aTime = a.lastMessage?.timestamp || a.createdAt
    const bTime = b.lastMessage?.timestamp || b.createdAt
    return new Date(bTime).getTime() - new Date(aTime).getTime()
  })

  const handleChatSelect = (chatId: string) => {
    selectChat(chatId)
    onMobileClose?.()
  }

  return (
    <div className="flex flex-col h-full bg-[var(--color-sidebar)] border-r border-[var(--color-border)]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={user?.avatar || "/placeholder.svg"}
              alt={user?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                isConnected ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"
              }`}
            />
          </div>
          <div>
            <h2 className="font-semibold text-[var(--color-foreground)]">{user?.name}</h2>
            <p className="text-xs text-[var(--color-muted)]">{isConnected ? "Online" : "Connecting..."}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGroupModal(true)}
            className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors"
            title="New Group"
          >
            <Plus className="w-5 h-5 text-[var(--color-muted-foreground)]" />
          </button>
          <button
            onClick={logout}
            className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5 text-[var(--color-muted-foreground)]" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)]" />
          <input
            type="text"
            placeholder="Search or start new chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[var(--color-input)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]"
          />
        </div>
      </div>

      <div className="flex border-b border-[var(--color-border)]">
        <button
          onClick={() => setActiveTab("chats")}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === "chats"
              ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
              : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Chats
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === "users"
              ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
              : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          }`}
        >
          <Users className="w-4 h-4" />
          Users
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors relative ${
            activeTab === "requests"
              ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
              : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          }`}
        >
          <UserPlus className="w-4 h-4" />
          Requests
          {incomingRequestsCount > 0 && (
            <span className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full">
              {incomingRequestsCount}
            </span>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === "chats" ? (
          <div className="divide-y divide-[var(--color-border)]">
            {sortedChats.length === 0 ? (
              <div className="p-8 text-center text-[var(--color-muted)]">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No chats found</p>
                <p className="text-sm mt-1">Add friends to start chatting!</p>
              </div>
            ) : (
              sortedChats.map((chat) => {
                const otherUser = getOtherParticipant(chat)
                const isSelected = selectedChat?.id === chat.id

                return (
                  <button
                    key={chat.id}
                    onClick={() => handleChatSelect(chat.id)}
                    className={`w-full p-3 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors ${
                      isSelected ? "bg-[var(--color-accent)]" : ""
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        src={getChatAvatar(chat) || "/placeholder.svg"}
                        alt={getChatName(chat)}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {chat.type === "direct" && otherUser && (
                        <span
                          className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${
                            otherUser.status === "online" ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"
                          }`}
                        />
                      )}
                      {chat.type === "group" && (
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                          <Users className="w-3 h-3 text-white" />
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-[var(--color-foreground)] truncate">{getChatName(chat)}</h3>
                        {chat.lastMessage && (
                          <span className="text-xs text-[var(--color-muted)]">
                            {formatDistanceToNow(new Date(chat.lastMessage.timestamp), {
                              addSuffix: false,
                            })}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-0.5">
                        <p className="text-sm text-[var(--color-muted-foreground)] truncate">
                          {chat.lastMessage?.content || "No messages yet"}
                        </p>
                        {chat.unreadCount > 0 && (
                          <span className="ml-2 px-2 py-0.5 text-xs font-medium text-white bg-[var(--color-primary)] rounded-full">
                            {chat.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })
            )}
          </div>
        ) : activeTab === "users" ? (
          <UserList onMobileClose={onMobileClose} />
        ) : (
          <FriendRequests onMobileClose={onMobileClose} />
        )}
      </div>

      {/* Group Creation Modal */}
      <GroupCreationModal isOpen={showGroupModal} onClose={() => setShowGroupModal(false)} />
    </div>
  )
}
