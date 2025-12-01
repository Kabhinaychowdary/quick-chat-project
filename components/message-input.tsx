"use client"

/**
 * QuickChat - Message Input Component
 *
 * Input field for composing and sending messages.
 * Features typing indicator integration and emoji support placeholder.
 */

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send, Smile, Paperclip, Mic } from "lucide-react"
import { useChat } from "@/context/chat-context"
import { useSocket } from "@/context/socket-context"

export function MessageInput() {
  const { selectedChat, sendMessage, setTyping } = useChat()
  const { emit } = useSocket()

  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Focus input when chat changes
  useEffect(() => {
    inputRef.current?.focus()
  }, [selectedChat?.id])

  // Handle typing indicator
  useEffect(() => {
    if (!selectedChat) return

    if (message && !isTyping) {
      setIsTyping(true)
      setTyping(selectedChat.id, true)
      emit("typing:start", { chatId: selectedChat.id })
    }

    // Clear previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set new timeout to stop typing indicator
    typingTimeoutRef.current = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false)
        setTyping(selectedChat.id, false)
        emit("typing:stop", { chatId: selectedChat.id })
      }
    }, 2000)

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [message, selectedChat, isTyping, setTyping, emit])

  const handleSend = () => {
    if (!message.trim() || !selectedChat) return

    sendMessage(message)
    setMessage("")
    setIsTyping(false)
    setTyping(selectedChat.id, false)
    emit("typing:stop", { chatId: selectedChat.id })

    inputRef.current?.focus()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!selectedChat) return null

  return (
    <div className="p-3 bg-[var(--color-card)] border-t border-[var(--color-border)]">
      <div className="flex items-center gap-2">
        {/* Emoji button */}
        <button className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors">
          <Smile className="w-6 h-6 text-[var(--color-muted-foreground)]" />
        </button>

        {/* Attachment button */}
        <button className="p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors">
          <Paperclip className="w-6 h-6 text-[var(--color-muted-foreground)]" />
        </button>

        {/* Input field */}
        <div className="flex-1">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="w-full px-4 py-3 bg-[var(--color-input)] rounded-full text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* Send/Voice button */}
        {message.trim() ? (
          <button
            onClick={handleSend}
            className="p-3 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        ) : (
          <button className="p-3 rounded-full hover:bg-[var(--color-secondary)] transition-colors">
            <Mic className="w-5 h-5 text-[var(--color-muted-foreground)]" />
          </button>
        )}
      </div>
    </div>
  )
}
