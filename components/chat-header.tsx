"use client"
import { ArrowLeft, Phone, Video, MoreVertical, Users, Trash2 } from "lucide-react"
import { useChat } from "@/context/chat-context"
import { dummyUsers } from "@/utils/dummy-users"
import { useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

interface ChatHeaderProps {
  onBackClick?: () => void
}

export function ChatHeader({ onBackClick }: ChatHeaderProps) {
  const { selectedChat, getChatName, getChatAvatar, getOtherParticipant, typingUsers, deleteChat } = useChat()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  if (!selectedChat) return null

  const otherUser = getOtherParticipant(selectedChat)
  const chatTypingUsers = typingUsers[selectedChat.id] || []
  const isTyping = chatTypingUsers.length > 0

  // Get participant names for group chats
  const getParticipantNames = () => {
    if (selectedChat.type !== "group") return ""

    return selectedChat.participants.map((id) => dummyUsers.find((u) => u.id === id)?.name || "Unknown").join(", ")
  }

  // Get typing indicator text
  const getTypingText = () => {
    if (!isTyping) return null

    const typingNames = chatTypingUsers.map((id) => dummyUsers.find((u) => u.id === id)?.name || "Someone").join(", ")

    return `${typingNames} is typing...`
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-card)] border-b border-[var(--color-border)]">
      <div className="flex items-center gap-3">
        {/* Back button for mobile */}
        <button
          onClick={onBackClick}
          className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors md:hidden"
        >
          <ArrowLeft className="w-5 h-5 text-[var(--color-muted-foreground)]" />
        </button>

        {/* Avatar */}
        <div className="relative">
          <img
            src={getChatAvatar(selectedChat) || "/placeholder.svg"}
            alt={getChatName(selectedChat)}
            className="w-10 h-10 rounded-full object-cover"
          />
          {selectedChat.type === "direct" && otherUser && (
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--color-card)] ${
                otherUser.status === "online" ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"
              }`}
            />
          )}
          {selectedChat.type === "group" && (
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
              <Users className="w-3 h-3 text-white" />
            </span>
          )}
        </div>

        {/* Info */}
        <div>
          <h2 className="font-semibold text-[var(--color-foreground)]">{getChatName(selectedChat)}</h2>
          <p className="text-xs text-[var(--color-muted)]">
            {isTyping ? (
              <span className="text-[var(--color-primary)] flex items-center gap-1">
                {getTypingText()}
                <span className="flex gap-0.5">
                  <span className="typing-dot w-1 h-1 rounded-full bg-[var(--color-primary)]" />
                  <span className="typing-dot w-1 h-1 rounded-full bg-[var(--color-primary)]" />
                  <span className="typing-dot w-1 h-1 rounded-full bg-[var(--color-primary)]" />
                </span>
              </span>
            ) : selectedChat.type === "direct" ? (
              otherUser?.status === "online" ? (
                "Online"
              ) : (
                `Last seen ${otherUser?.lastSeen || "recently"}`
              )
            ) : (
              <span className="truncate max-w-[200px] inline-block">{getParticipantNames()}</span>
            )}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors">
          <Video className="w-5 h-5 text-[var(--color-muted-foreground)]" />
        </button>
        <button className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors">
          <Phone className="w-5 h-5 text-[var(--color-muted-foreground)]" />
        </button>
        <button
          onClick={() => setShowDeleteDialog(true)}
          className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors text-red-500 hover:text-red-600"
          title="Delete chat"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Delete confirmation dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Chat</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this chat with <strong>{getChatName(selectedChat)}</strong>? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end gap-3">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                deleteChat(selectedChat.id)
                setShowDeleteDialog(false)
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
