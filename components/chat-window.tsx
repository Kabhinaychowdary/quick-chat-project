"use client"
import { MessageSquare } from "lucide-react"
import { useChat } from "@/context/chat-context"
import { ChatHeader } from "./chat-header"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"

interface ChatWindowProps {
  onBackClick?: () => void
}

export function ChatWindow({ onBackClick }: ChatWindowProps) {
  const { selectedChat } = useChat()

  if (!selectedChat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[var(--color-background)] text-center p-8">
        <div className="w-24 h-24 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
          <MessageSquare className="w-12 h-12 text-[var(--color-primary)]" />
        </div>
        <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-2">Welcome to QuickChat</h2>
        <p className="text-[var(--color-muted)] max-w-md">
          Select a conversation from the sidebar or start a new chat to begin messaging. Your messages are fast, simple,
          and secure.
        </p>
        <div className="mt-8 flex items-center gap-4 text-sm text-[var(--color-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-online)]" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span>Real-time messaging</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <ChatHeader onBackClick={onBackClick} />
      <MessageList />
      <MessageInput />
    </div>
  )
}
