module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/fsd_project/quick-chat-react-project (1)/lib/storage-adapter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAllFriendships",
    ()=>getAllFriendships,
    "getAllRequests",
    ()=>getAllRequests,
    "getAllUsers",
    ()=>getAllUsers,
    "getStoredChats",
    ()=>getStoredChats,
    "getStoredMessages",
    ()=>getStoredMessages,
    "getStories",
    ()=>getStories,
    "saveAllFriendships",
    ()=>saveAllFriendships,
    "saveAllRequests",
    ()=>saveAllRequests,
    "saveAllUsers",
    ()=>saveAllUsers,
    "saveChatsToStorage",
    ()=>saveChatsToStorage,
    "saveMessagesToStorage",
    ()=>saveMessagesToStorage,
    "saveStories",
    ()=>saveStories
]);
const API_BASE = "http://localhost:4000";
const STORAGE_KEYS = {
    CHATS: "quickchat_chats",
    MESSAGES: "quickchat_messages",
    USERS: "quickchat_registered_users",
    REQUESTS: "quickchat_all_requests_db",
    FRIENDSHIPS: "quickchat_all_friendships_db",
    STORIES: "quickchat_stories"
};
function safeParse(str) {
    if (!str) return null;
    try {
        return JSON.parse(str);
    } catch (e) {
        console.error("[Storage Adapter] parse error", e);
        return null;
    }
}
function getStoredChats() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveChatsToStorage(chats) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getStoredMessages() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveMessagesToStorage(messages) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getAllUsers() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveAllUsers(users) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getAllRequests() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveAllRequests(requests) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getAllFriendships() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveAllFriendships(friendships) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getStories() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
}
function saveStories(stories) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
const __TURBOPACK__default__export__ = {
    getStoredChats,
    saveChatsToStorage,
    getStoredMessages,
    saveMessagesToStorage,
    getAllUsers,
    saveAllUsers
};
}),
"[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/lib/storage-adapter.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Skip auto-login - user must explicitly login
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsLoading(false);
    }, []);
    /**
   * Login function - authenticates user with email/password
   * In production, this would call a real authentication API
   */ const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email, password)=>{
        setIsLoading(true);
        setError(null);
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 800));
        const allUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllUsers"])();
        const foundUser = allUsers.find((u)=>u.email.toLowerCase() === email.toLowerCase());
        if (foundUser && password.length >= 6) {
            const loggedInUser = {
                ...foundUser,
                status: "online"
            };
            setUser(loggedInUser);
            localStorage.setItem("quickchat_user", JSON.stringify(loggedInUser));
            setIsLoading(false);
            return true;
        }
        setError("Invalid email or password");
        setIsLoading(false);
        return false;
    }, []);
    /**
   * Register function - creates new user account
   * In production, this would call a real registration API
   */ const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (name, email, password)=>{
        setIsLoading(true);
        setError(null);
        // Simulate API delay
        await new Promise((resolve)=>setTimeout(resolve, 800));
        const allUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllUsers"])();
        const existingUser = allUsers.find((u)=>u.email.toLowerCase() === email.toLowerCase());
        if (existingUser) {
            setError("Email already registered");
            setIsLoading(false);
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setIsLoading(false);
            return false;
        }
        // Create new user
        const newUser = {
            id: `user-${Date.now()}`,
            name,
            email,
            avatar: `/placeholder.svg?height=40&width=40&query=${encodeURIComponent(name)} avatar`,
            status: "online"
        };
        // persist via storage adapter
        const updated = [
            ...allUsers,
            newUser
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllUsers"])(updated);
        setUser(newUser);
        localStorage.setItem("quickchat_user", JSON.stringify(newUser));
        setIsLoading(false);
        return true;
    }, []);
    /**
   * Logout function - clears user session
   */ const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setUser(null);
        localStorage.removeItem("quickchat_user");
    }, []);
    const value = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        error
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx",
        lineNumber: 127,
        columnNumber: 10
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatProvider",
    ()=>ChatProvider,
    "useChat",
    ()=>useChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/lib/storage-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const STORAGE_KEYS = {
    CHATS: "quickchat_chats",
    MESSAGES: "quickchat_messages",
    MIGRATION_V2: "quickchat_migrated_v2"
};
/**
 * Remove duplicate chats. For group chats, dedupe by group name so
 * there is only one group with the same name. For other chats, keep
 * the first occurrence.
 */ function dedupeChats(chats) {
    const seen = new Set();
    const out = [];
    for (const c of chats){
        const key = c.type === "group" && c.name ? `group:${c.name}` : `chat:${c.id}`;
        if (!seen.has(key)) {
            seen.add(key);
            out.push(c);
        }
    }
    return out;
}
const ChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ChatProvider({ children }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [typingUsers, setTypingUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [allUsers, setAllUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Migration: Clear old persisted chats on first load (v2)
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && !localStorage.getItem(STORAGE_KEYS.MIGRATION_V2)) //TURBOPACK unreachable
        ;
        const storedChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredChats"])();
        const storedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredMessages"])();
        // Start with only user-created chats (no seed data)
        const cleaned = dedupeChats(storedChats);
        setChats(cleaned);
        if (cleaned.length !== storedChats.length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(cleaned);
        setMessages(storedMessages);
        setIsInitialized(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user || !isInitialized) return;
        const refreshData = ()=>{
            const storedChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredChats"])();
            const storedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredMessages"])();
            if (storedChats.length > 0) {
                const cleaned = dedupeChats(storedChats);
                setChats(cleaned);
                if (cleaned.length !== storedChats.length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(cleaned);
            }
            if (storedMessages.length > 0) {
                setMessages(storedMessages);
            }
        };
        // Refresh immediately
        refreshData();
        const interval = setInterval(refreshData, 2000);
        return ()=>clearInterval(interval);
    }, [
        user,
        isInitialized
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initial load
        setAllUsers((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllUsers"])());
        // Poll for new users every 2 seconds
        const interval = setInterval(()=>{
            setAllUsers((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllUsers"])());
        }, 2000);
        return ()=>clearInterval(interval);
    }, [
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAllUsers((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllUsers"])());
    }, [
        user
    ]);
    /**
   * Select a chat and load its messages
   */ const selectChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chatId)=>{
        const chat = chats.find((c)=>c.id === chatId);
        if (chat) {
            setSelectedChat(chat);
            // Mark messages as read
            setChats((prev)=>{
                const updated = prev.map((c)=>c.id === chatId ? {
                        ...c,
                        unreadCount: 0
                    } : c);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updated);
                return updated;
            });
        }
    }, [
        chats
    ]);
    /**
   * Send a new message in the selected chat
   */ const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((content)=>{
        if (!selectedChat || !user || !content.trim()) return;
        const newMessage = {
            id: `msg-${Date.now()}-${user.id}`,
            chatId: selectedChat.id,
            senderId: user.id,
            content: content.trim(),
            timestamp: new Date(),
            status: "sent"
        };
        setMessages((prev)=>{
            const updated = [
                ...prev,
                newMessage
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMessagesToStorage"])(updated);
            return updated;
        });
        setChats((prev)=>{
            const updated = prev.map((chat)=>{
                if (chat.id === selectedChat.id) {
                    return {
                        ...chat,
                        lastMessage: newMessage,
                        // Increment unread count for the recipient
                        unreadCount: 0
                    };
                }
                return chat;
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updated);
            return updated;
        });
        // Simulate message delivery status update
        setTimeout(()=>{
            setMessages((prev)=>{
                const updated = prev.map((msg)=>msg.id === newMessage.id ? {
                        ...msg,
                        status: "delivered"
                    } : msg);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMessagesToStorage"])(updated);
                return updated;
            });
        }, 1000);
        // Simulate read status
        setTimeout(()=>{
            setMessages((prev)=>{
                const updated = prev.map((msg)=>msg.id === newMessage.id ? {
                        ...msg,
                        status: "read"
                    } : msg);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMessagesToStorage"])(updated);
                return updated;
            });
        }, 2000);
    }, [
        selectedChat,
        user
    ]);
    /**
   * Create a new group chat
   */ const createGroupChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name, participantIds)=>{
        if (!user) return;
        const newChat = {
            id: `chat-${Date.now()}`,
            type: "group",
            name,
            avatar: `/placeholder.svg?height=40&width=40&query=${encodeURIComponent(name)} group`,
            participants: [
                user.id,
                ...participantIds
            ],
            unreadCount: 0,
            createdAt: new Date()
        };
        setChats((prev)=>{
            const updated = [
                newChat,
                ...prev
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updated);
            return updated;
        });
        setSelectedChat(newChat);
    }, [
        user
    ]);
    /**
   * Create or open a direct chat with a user
   */ const createDirectChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((userId)=>{
        if (!user) return;
        const latestChats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredChats"])();
        const existingChat = latestChats.find((chat)=>chat.type === "direct" && chat.participants.includes(user.id) && chat.participants.includes(userId));
        if (existingChat) {
            setChats(latestChats);
            setSelectedChat(existingChat);
            return;
        }
        const newChat = {
            id: `chat-${Date.now()}-${user.id}-${userId}`,
            type: "direct",
            participants: [
                user.id,
                userId
            ],
            unreadCount: 0,
            createdAt: new Date()
        };
        const updatedChats = [
            newChat,
            ...latestChats
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updatedChats);
        setChats(updatedChats);
        setSelectedChat(newChat);
    }, [
        user
    ]);
    /**
   * Mark all messages in a chat as read
   */ const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chatId)=>{
        setChats((prev)=>{
            const updated = prev.map((chat)=>chat.id === chatId ? {
                    ...chat,
                    unreadCount: 0
                } : chat);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updated);
            return updated;
        });
    }, []);
    /**
   * Remove a user from a chat. If after removal the chat has fewer than
   * 2 participants, the chat will be deleted.
   */ const removeUserFromChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chatId, userId)=>{
        setChats((prev)=>{
            const updated = [];
            for (const c of prev){
                if (c.id === chatId) {
                    const participants = c.participants.filter((p)=>p !== userId);
                    if (participants.length < 2) {
                        continue;
                    }
                    updated.push({
                        ...c,
                        participants
                    });
                } else {
                    updated.push(c);
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updated);
            // If the selected chat was modified/removed, update selectedChat
            if (selectedChat?.id === chatId) {
                const found = updated.find((ch)=>ch.id === chatId);
                if (found) setSelectedChat(found);
                else setSelectedChat(null);
            }
            return updated;
        });
    }, [
        selectedChat
    ]);
    /** Delete a chat and its messages */ const deleteChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chatId)=>{
        setChats((prev)=>{
            const updated = prev.filter((c)=>c.id !== chatId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updated);
            return updated;
        });
        setMessages((prev)=>{
            const updated = prev.filter((m)=>m.chatId !== chatId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveMessagesToStorage"])(updated);
            return updated;
        });
        if (selectedChat?.id === chatId) {
            setSelectedChat(null);
        }
    }, [
        selectedChat
    ]);
    /** Edit chat metadata (name, avatar, participants) */ const editChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chatId, updates)=>{
        setChats((prev)=>{
            const updated = prev.map((c)=>c.id === chatId ? {
                    ...c,
                    ...updates
                } : c);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveChatsToStorage"])(updated);
            return updated;
        });
        if (selectedChat?.id === chatId) {
            const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredChats"])().find((c)=>c.id === chatId) || null;
            setSelectedChat(latest);
        }
    }, [
        selectedChat
    ]);
    /**
   * Set typing indicator for current user in a chat
   */ const setTyping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chatId, isTyping)=>{
        if (!user) return;
        setTypingUsers((prev)=>{
            const currentTyping = prev[chatId] || [];
            if (isTyping && !currentTyping.includes(user.id)) {
                return {
                    ...prev,
                    [chatId]: [
                        ...currentTyping,
                        user.id
                    ]
                };
            } else if (!isTyping) {
                return {
                    ...prev,
                    [chatId]: currentTyping.filter((id)=>id !== user.id)
                };
            }
            return prev;
        });
    }, [
        user
    ]);
    /**
   * Get display name for a chat
   */ const getChatName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chat)=>{
        if (chat.type === "group") {
            return chat.name || "Group Chat";
        }
        const otherUserId = chat.participants.find((id)=>id !== user?.id);
        const otherUser = allUsers.find((u)=>u.id === otherUserId);
        return otherUser?.name || "Unknown User";
    }, [
        user,
        allUsers
    ]);
    /**
   * Get avatar for a chat
   */ const getChatAvatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chat)=>{
        if (chat.type === "group" && chat.avatar) {
            return chat.avatar;
        }
        const otherUserId = chat.participants.find((id)=>id !== user?.id);
        const otherUser = allUsers.find((u)=>u.id === otherUserId);
        return otherUser?.avatar || "/default-avatar.png";
    }, [
        user,
        allUsers
    ]);
    /**
   * Get the other participant in a direct chat
   */ const getOtherParticipant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chat)=>{
        if (chat.type !== "direct") return undefined;
        const otherUserId = chat.participants.find((id)=>id !== user?.id);
        return allUsers.find((u)=>u.id === otherUserId);
    }, [
        user,
        allUsers
    ]);
    /**
   * Get users available for new chats (excludes current user)
   * Now includes registered users from localStorage
   */ const availableUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!user) return [];
        return allUsers.filter((u)=>u.id !== user.id);
    }, [
        user,
        allUsers
    ]);
    const value = {
        chats,
        messages,
        selectedChat,
        typingUsers,
        selectChat,
        sendMessage,
        createGroupChat,
        createDirectChat,
        markAsRead,
        setTyping,
        getChatName,
        getChatAvatar,
        getOtherParticipant,
        availableUsers
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx",
        lineNumber: 465,
        columnNumber: 10
    }, this);
}
function useChat() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ChatContext);
    if (context === undefined) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/context/socket-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocketProvider",
    ()=>SocketProvider,
    "useSocket",
    ()=>useSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const SocketContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SocketProvider({ children }) {
    const { user, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eventHandlers, setEventHandlers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    /**
   * Simulate socket connection when user authenticates
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthenticated && user) {
            // Simulate connection delay
            const timer = setTimeout(()=>{
                setIsConnected(true);
                console.log("[QuickChat Socket] Connected as:", user.name);
                // Emit connected event
                triggerEvent("user:connected", {
                    userId: user.id
                });
            }, 500);
            return ()=>{
                clearTimeout(timer);
                setIsConnected(false);
                console.log("[QuickChat Socket] Disconnected");
            };
        } else {
            setIsConnected(false);
        }
    }, [
        isAuthenticated,
        user
    ]);
    /**
   * Trigger all handlers for an event
   */ const triggerEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event, data)=>{
        const handlers = eventHandlers[event] || [];
        handlers.forEach((handler)=>handler(data));
    }, [
        eventHandlers
    ]);
    /**
   * Emit an event (simulates sending to server)
   * In production, this would use socket.emit()
   */ const emit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event, data)=>{
        if (!isConnected) {
            console.warn("[QuickChat Socket] Not connected, cannot emit:", event);
            return;
        }
        console.log("[QuickChat Socket] Emit:", event, data);
        // Simulate server response for certain events
        switch(event){
            case "message:send":
                // Simulate message delivery confirmation
                setTimeout(()=>{
                    triggerEvent("message:delivered", data);
                }, 500);
                break;
            case "typing:start":
                // Simulate typing indicator broadcast
                setTimeout(()=>{
                    triggerEvent("user:typing", data);
                }, 100);
                break;
            case "typing:stop":
                setTimeout(()=>{
                    triggerEvent("user:stopped-typing", data);
                }, 100);
                break;
            default:
                break;
        }
    }, [
        isConnected,
        triggerEvent
    ]);
    /**
   * Subscribe to an event
   */ const on = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event, handler)=>{
        setEventHandlers((prev)=>({
                ...prev,
                [event]: [
                    ...prev[event] || [],
                    handler
                ]
            }));
    }, []);
    /**
   * Unsubscribe from an event
   */ const off = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event, handler)=>{
        setEventHandlers((prev)=>({
                ...prev,
                [event]: (prev[event] || []).filter((h)=>h !== handler)
            }));
    }, []);
    /**
   * Simulate random typing indicators from other users
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isConnected) return;
        const interval = setInterval(()=>{
            // Randomly trigger typing indicator (10% chance)
            if (Math.random() < 0.1) {
                triggerEvent("user:typing", {
                    userId: "user-2",
                    chatId: "chat-1"
                });
                // Stop typing after 2-4 seconds
                setTimeout(()=>{
                    triggerEvent("user:stopped-typing", {
                        userId: "user-2",
                        chatId: "chat-1"
                    });
                }, 2000 + Math.random() * 2000);
            }
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        isConnected,
        triggerEvent
    ]);
    const value = {
        isConnected,
        emit,
        on,
        off
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocketContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/context/socket-context.tsx",
        lineNumber: 170,
        columnNumber: 10
    }, this);
}
function useSocket() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SocketContext);
    if (context === undefined) {
        throw new Error("useSocket must be used within a SocketProvider");
    }
    return context;
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/context/friend-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FriendProvider",
    ()=>FriendProvider,
    "useFriend",
    ()=>useFriend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/lib/storage-adapter.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const FriendContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Global database keys - shared by all users
const GLOBAL_REQUESTS_DB = "quickchat_all_requests_db";
const GLOBAL_FRIENDSHIPS_DB = "quickchat_all_friendships_db";
const POLL_INTERVAL = 1000 // Check for updates every second
;
// Helper functions to manage global database
const getAllRequestsFromDB = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllRequests"])().map((r)=>({
            ...r,
            createdAt: new Date(r.createdAt)
        }));
};
const getAllFriendshipsFromDB = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllFriendships"])().map((f)=>({
            ...f,
            createdAt: new Date(f.createdAt)
        }));
};
const saveRequestsToDB = (requests)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllRequests"])(requests);
};
const saveFriendshipsToDB = (friendships)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$storage$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAllFriendships"])(friendships);
};
function FriendProvider({ children }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [friendRequests, setFriendRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [friendships, setFriendships] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const pollTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load relevant requests and friendships for current user from global DB
    const loadUserData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!user) return;
        const allRequests = getAllRequestsFromDB();
        const allFriendships = getAllFriendshipsFromDB();
        // Filter requests relevant to this user
        const userRequests = allRequests.filter((r)=>r.fromUserId === user.id || r.toUserId === user.id);
        // Filter friendships relevant to this user
        const userFriendships = allFriendships.filter((f)=>f.user1Id === user.id || f.user2Id === user.id);
        setFriendRequests(userRequests);
        setFriendships(userFriendships);
        console.log("[Friend Context] Loaded data for user:", user.id, {
            userRequests,
            userFriendships
        });
    }, [
        user
    ]);
    // Load data when user changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadUserData();
    }, [
        user,
        loadUserData
    ]);
    // Poll for changes every second
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) return;
        pollTimerRef.current = setInterval(()=>{
            loadUserData();
        }, POLL_INTERVAL);
        return ()=>{
            if (pollTimerRef.current) {
                clearInterval(pollTimerRef.current);
            }
        };
    }, [
        user,
        loadUserData
    ]);
    // Listen to storage changes from other tabs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleStorageChange = (e)=>{
            if (e.key === GLOBAL_REQUESTS_DB || e.key === GLOBAL_FRIENDSHIPS_DB) {
                console.log("[Friend Context] Storage changed in another tab:", e.key);
                loadUserData();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return ()=>window.removeEventListener("storage", handleStorageChange);
    }, [
        loadUserData
    ]);
    const sendFriendRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((toUserId)=>{
        if (!user) {
            console.log("[Friend Context] Cannot send request - no user logged in");
            return;
        }
        console.log("[Friend Context] Sending request from", user.id, "to", toUserId);
        const allRequests = getAllRequestsFromDB();
        // Check if request already exists
        const exists = allRequests.some((r)=>r.fromUserId === user.id && r.toUserId === toUserId || r.fromUserId === toUserId && r.toUserId === user.id);
        if (exists) {
            console.log("[Friend Context] Request already exists");
            return;
        }
        // Check if already friends
        const allFriendships = getAllFriendshipsFromDB();
        const isFriends = allFriendships.some((f)=>f.user1Id === user.id && f.user2Id === toUserId || f.user1Id === toUserId && f.user2Id === user.id);
        if (isFriends) {
            console.log("[Friend Context] Already friends");
            return;
        }
        const newRequest = {
            id: `req-${Date.now()}`,
            fromUserId: user.id,
            toUserId,
            status: "pending",
            createdAt: new Date()
        };
        const updatedRequests = [
            ...allRequests,
            newRequest
        ];
        saveRequestsToDB(updatedRequests);
        // Reload local state
        setFriendRequests((prev)=>[
                ...prev,
                newRequest
            ]);
        console.log("[Friend Context] Request sent:", newRequest);
    }, [
        user
    ]);
    const acceptFriendRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((requestId)=>{
        const allRequests = getAllRequestsFromDB();
        const request = allRequests.find((r)=>r.id === requestId);
        if (!request || request.status !== "pending") return;
        // Update request status
        const updatedRequests = allRequests.map((r)=>r.id === requestId ? {
                ...r,
                status: "accepted"
            } : r);
        saveRequestsToDB(updatedRequests);
        // Add friendship
        const allFriendships = getAllFriendshipsFromDB();
        const newFriendship = {
            id: `friend-${Date.now()}`,
            user1Id: request.fromUserId,
            user2Id: request.toUserId,
            createdAt: new Date()
        };
        const updatedFriendships = [
            ...allFriendships,
            newFriendship
        ];
        saveFriendshipsToDB(updatedFriendships);
        // Reload local state
        setFriendRequests(updatedRequests.filter((r)=>r.fromUserId === user?.id || r.toUserId === user?.id));
        setFriendships(updatedFriendships.filter((f)=>f.user1Id === user?.id || f.user2Id === user?.id));
        console.log("[Friend Context] Request accepted:", requestId);
    }, [
        user
    ]);
    const rejectFriendRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((requestId)=>{
        const allRequests = getAllRequestsFromDB();
        const updatedRequests = allRequests.filter((r)=>r.id !== requestId);
        saveRequestsToDB(updatedRequests);
        setFriendRequests((prev)=>prev.filter((r)=>r.id !== requestId));
    }, []);
    const cancelFriendRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((requestId)=>{
        const allRequests = getAllRequestsFromDB();
        const updatedRequests = allRequests.filter((r)=>r.id !== requestId);
        saveRequestsToDB(updatedRequests);
        setFriendRequests((prev)=>prev.filter((r)=>r.id !== requestId));
    }, []);
    const removeFriend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((friendshipId)=>{
        const allFriendships = getAllFriendshipsFromDB();
        const updatedFriendships = allFriendships.filter((f)=>f.id !== friendshipId);
        saveFriendshipsToDB(updatedFriendships);
        setFriendships((prev)=>prev.filter((f)=>f.id !== friendshipId));
        // Also remove associated request
        const friendship = allFriendships.find((f)=>f.id === friendshipId);
        if (friendship) {
            const allRequests = getAllRequestsFromDB();
            const updatedRequests = allRequests.filter((r)=>!(r.fromUserId === friendship.user1Id && r.toUserId === friendship.user2Id || r.fromUserId === friendship.user2Id && r.toUserId === friendship.user1Id));
            saveRequestsToDB(updatedRequests);
        }
    }, []);
    const isFriend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((userId)=>{
        if (!user) return false;
        return friendships.some((f)=>f.user1Id === user.id && f.user2Id === userId || f.user1Id === userId && f.user2Id === user.id);
    }, [
        user,
        friendships
    ]);
    const hasPendingRequestTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((userId)=>{
        if (!user) return false;
        return friendRequests.some((r)=>r.fromUserId === user.id && r.toUserId === userId && r.status === "pending");
    }, [
        user,
        friendRequests
    ]);
    const hasPendingRequestFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((userId)=>{
        if (!user) return false;
        return friendRequests.some((r)=>r.fromUserId === userId && r.toUserId === user.id && r.status === "pending");
    }, [
        user,
        friendRequests
    ]);
    const getRequestStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((userId)=>{
        if (isFriend(userId)) return "friends";
        if (hasPendingRequestTo(userId)) return "sent";
        if (hasPendingRequestFrom(userId)) return "received";
        return "none";
    }, [
        isFriend,
        hasPendingRequestTo,
        hasPendingRequestFrom
    ]);
    const getIncomingRequests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!user) return [];
        return friendRequests.filter((r)=>r.toUserId === user.id && r.status === "pending");
    }, [
        user,
        friendRequests
    ]);
    const getOutgoingRequests = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!user) return [];
        return friendRequests.filter((r)=>r.fromUserId === user.id && r.status === "pending");
    }, [
        user,
        friendRequests
    ]);
    const getFriendIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!user) return [];
        return friendships.map((f)=>f.user1Id === user.id ? f.user2Id : f.user1Id);
    }, [
        user,
        friendships
    ]);
    const value = {
        friendRequests,
        friendships,
        sendFriendRequest,
        acceptFriendRequest,
        rejectFriendRequest,
        cancelFriendRequest,
        removeFriend,
        isFriend,
        hasPendingRequestTo,
        hasPendingRequestFrom,
        getRequestStatus,
        getIncomingRequests,
        getOutgoingRequests,
        getFriendIds
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FriendContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/context/friend-context.tsx",
        lineNumber: 356,
        columnNumber: 10
    }, this);
}
function useFriend() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FriendContext);
    if (context === undefined) {
        throw new Error("useFriend must be used within a FriendProvider");
    }
    return context;
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginPage",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LoginPage({ onSwitchToRegister }) {
    const { login, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await login(email, password);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-[var(--color-background)] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-8 h-8 text-white"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-[var(--color-foreground)]",
                            children: "Welcome back"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[var(--color-muted)] mt-1",
                            children: "Sign in to continue to QuickChat"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[var(--color-card)] rounded-2xl shadow-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: "Enter your email",
                                                    className: "w-full pl-12 pr-4 py-3 bg-[var(--color-input)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    placeholder: "Enter your password",
                                                    className: "w-full pl-12 pr-12 py-3 bg-[var(--color-input)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 68
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-lg bg-[var(--color-destructive)]/10 text-[var(--color-destructive)] text-sm",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-lg bg-[var(--color-accent)] text-sm text-[var(--color-accent-foreground)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: "Demo credentials:"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Email: john@example.com | Password: any 6+ chars"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full py-3 px-4 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isLoading ? "Signing in..." : "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[var(--color-muted)]",
                                children: [
                                    "Don't have an account?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onSwitchToRegister,
                                        className: "text-[var(--color-primary)] font-medium hover:underline",
                                        children: "Sign up"
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegisterPage",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function RegisterPage({ onSwitchToLogin }) {
    const { register, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setValidationError("");
        if (password !== confirmPassword) {
            setValidationError("Passwords do not match");
            return;
        }
        if (password.length < 6) {
            setValidationError("Password must be at least 6 characters");
            return;
        }
        await register(name, email, password);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-[var(--color-background)] p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-8 h-8 text-white"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-[var(--color-foreground)]",
                            children: "Create an account"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[var(--color-muted)] mt-1",
                            children: "Join QuickChat and start messaging"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[var(--color-card)] rounded-2xl shadow-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    placeholder: "Enter your name",
                                                    className: "w-full pl-12 pr-4 py-3 bg-[var(--color-input)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    placeholder: "Enter your email",
                                                    className: "w-full pl-12 pr-4 py-3 bg-[var(--color-input)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    placeholder: "Create a password",
                                                    className: "w-full pl-12 pr-12 py-3 bg-[var(--color-input)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 68
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                            children: "Confirm Password"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    value: confirmPassword,
                                                    onChange: (e)=>setConfirmPassword(e.target.value),
                                                    placeholder: "Confirm your password",
                                                    className: "w-full pl-12 pr-4 py-3 bg-[var(--color-input)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                (error || validationError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-lg bg-[var(--color-destructive)]/10 text-[var(--color-destructive)] text-sm",
                                    children: error || validationError
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full py-3 px-4 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isLoading ? "Creating account..." : "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[var(--color-muted)]",
                                children: [
                                    "Already have an account?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onSwitchToLogin,
                                        className: "text-[var(--color-primary)] font-medium hover:underline",
                                        children: "Sign in"
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserList",
    ()=>UserList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/friend-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function UserList({ onMobileClose }) {
    const { availableUsers, createDirectChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const { getRequestStatus, sendFriendRequest, cancelFriendRequest, getOutgoingRequests } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFriend"])();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const showNotification = (message, type = "success")=>{
        setNotification({
            message,
            type
        });
        // Also show browser alert so user definitely sees it
        alert(message);
        setTimeout(()=>setNotification(null), 5000);
    };
    const handleSendRequest = (userId)=>{
        const user = availableUsers.find((u)=>u.id === userId);
        sendFriendRequest(userId);
        showNotification(`Friend request sent to ${user?.name || "user"}!`, "success");
    };
    const handleCancelRequest = (userId)=>{
        const outgoing = getOutgoingRequests();
        const request = outgoing.find((r)=>r.toUserId === userId);
        if (request) {
            cancelFriendRequest(request.id);
            showNotification("Friend request cancelled", "success");
        }
    };
    const handleStartChat = (userId)=>{
        createDirectChat(userId);
        onMobileClose?.();
    };
    // Group users by online status
    const onlineUsers = availableUsers.filter((u)=>u.status === "online");
    const offlineUsers = availableUsers.filter((u)=>u.status !== "online");
    const renderUserAction = (userId)=>{
        const status = getRequestStatus(userId);
        switch(status){
            case "friends":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleStartChat(userId),
                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-primary)] text-white rounded-full text-xs font-medium hover:bg-[var(--color-primary-hover)] transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        "Chat"
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this);
            case "sent":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleCancelRequest(userId),
                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-full text-xs font-medium hover:bg-red-100 hover:text-red-600 transition-colors group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3.5 h-3.5 group-hover:hidden"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3.5 h-3.5 hidden group-hover:block"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "group-hover:hidden",
                            children: "Pending"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden group-hover:block",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this);
            case "received":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full text-xs font-medium",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        "Respond in Requests"
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleSendRequest(userId),
                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-secondary)] text-[var(--color-foreground)] rounded-full text-xs font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        "Add Friend"
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this);
        }
    };
    const renderUserSection = (users, title, isOnline)=>{
        if (users.length === 0) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 bg-[var(--color-secondary)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wide",
                        children: [
                            title,
                            " — ",
                            users.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full p-3 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user.avatar || "/placeholder.svg",
                                        alt: user.name,
                                        className: "w-10 h-10 rounded-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${isOnline ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-[var(--color-foreground)]",
                                        children: user.name
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs ${isOnline ? "text-[var(--color-online)]" : "text-[var(--color-muted)]"}`,
                                        children: isOnline ? "Online" : user.lastSeen ? `Last seen ${user.lastSeen}` : "Offline"
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            renderUserAction(user.id)
                        ]
                    }, user.id, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y divide-[var(--color-border)]",
        children: [
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-3 flex items-center gap-2 ${notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: notification.message
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this),
            availableUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 text-center text-[var(--color-muted)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                        className: "w-12 h-12 mx-auto mb-3 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No users found"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-1",
                        children: "Invite friends to join!"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    renderUserSection(onlineUsers, "Online", true),
                    renderUserSection(offlineUsers, "Offline", false)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/utils/dummy-users.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * QuickChat - Dummy Users Data
 *
 * This file contains mock user data for development and testing.
 * In production, this would be replaced with actual API calls.
 */ __turbopack_context__.s([
    "dummyUsers",
    ()=>dummyUsers,
    "getAllUsers",
    ()=>getAllUsers,
    "getRegisteredUsers",
    ()=>getRegisteredUsers,
    "getUserById",
    ()=>getUserById,
    "getUsersByIds",
    ()=>getUsersByIds,
    "saveRegisteredUser",
    ()=>saveRegisteredUser
]);
const dummyUsers = [];
const REGISTERED_USERS_KEY = "quickchat_registered_users";
const getRegisteredUsers = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
const saveRegisteredUser = (user)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const registered = undefined;
};
const getAllUsers = ()=>{
    // Only return registered users. The app will display only users created at runtime.
    return getRegisteredUsers();
};
const getUserById = (id)=>{
    return getAllUsers().find((user)=>user.id === id);
};
const getUsersByIds = (ids)=>{
    return getAllUsers().filter((user)=>ids.includes(user.id));
};
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FriendRequests",
    ()=>FriendRequests
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * QuickChat - Friend Requests Component
 *
 * Displays incoming and outgoing friend requests with accept/reject actions.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/friend-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$utils$2f$dummy$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/utils/dummy-users.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function FriendRequests({ onMobileClose }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { getIncomingRequests, getOutgoingRequests, acceptFriendRequest, rejectFriendRequest, cancelFriendRequest, friendRequests } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFriend"])();
    const { availableUsers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const [allUsers, setAllUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Refresh users list every second to ensure we have latest registered users
        const refreshUsers = ()=>{
            setAllUsers((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$utils$2f$dummy$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllUsers"])());
        };
        refreshUsers();
        const interval = setInterval(refreshUsers, 1000);
        return ()=>clearInterval(interval);
    }, []);
    const incomingRequests = getIncomingRequests();
    const outgoingRequests = getOutgoingRequests();
    const getUserById = (userId)=>{
        // First check allUsers, then fall back to availableUsers
        return allUsers.find((u)=>u.id === userId) || availableUsers.find((u)=>u.id === userId);
    };
    const handleAccept = (requestId)=>{
        acceptFriendRequest(requestId);
    };
    const handleReject = (requestId)=>{
        rejectFriendRequest(requestId);
    };
    const handleCancel = (requestId)=>{
        cancelFriendRequest(requestId);
    };
    if (incomingRequests.length === 0 && outgoingRequests.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-[var(--color-muted)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                    className: "w-12 h-12 mx-auto mb-3 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No friend requests"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mt-1",
                    children: "Send requests from the Users tab"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y divide-[var(--color-border)]",
        children: [
            incomingRequests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 bg-[var(--color-secondary)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wide flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                "Incoming Requests — ",
                                incomingRequests.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    incomingRequests.map((request)=>{
                        const fromUser = getUserById(request.fromUserId);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: fromUser?.avatar || "/placeholder.svg?height=40&width=40&query=user avatar",
                                            alt: fromUser?.name || "User",
                                            className: "w-10 h-10 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${fromUser?.status === "online" ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"}`
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-medium text-[var(--color-foreground)]",
                                            children: fromUser?.name || "Unknown User"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--color-muted)]",
                                            children: "Wants to connect with you"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAccept(request.id),
                                            className: "p-2 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary-hover)] transition-colors",
                                            title: "Accept",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleReject(request.id),
                                            className: "p-2 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-full hover:bg-red-100 hover:text-red-600 transition-colors",
                                            title: "Reject",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, request.id, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            outgoingRequests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 bg-[var(--color-secondary)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wide flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                "Sent Requests — ",
                                outgoingRequests.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    outgoingRequests.map((request)=>{
                        const toUser = getUserById(request.toUserId);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: toUser?.avatar || "/placeholder.svg?height=40&width=40&query=user avatar",
                                            alt: toUser?.name || "User",
                                            className: "w-10 h-10 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${toUser?.status === "online" ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"}`
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-medium text-[var(--color-foreground)]",
                                            children: toUser?.name || "Unknown User"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--color-muted)] flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                "Awaiting response"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCancel(request.id),
                                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-full text-xs font-medium hover:bg-red-100 hover:text-red-600 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        "Cancel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, request.id, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                            lineNumber: 144,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GroupCreationModal",
    ()=>GroupCreationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * QuickChat - Group Creation Modal
 *
 * Modal dialog for creating new group chats with selected participants.
 * Only shows friends (users who have accepted friend requests).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/friend-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function GroupCreationModal({ isOpen, onClose }) {
    const { availableUsers, createGroupChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const { isFriend } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFriend"])();
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedUsers, setSelectedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const friendUsers = availableUsers.filter((user)=>isFriend(user.id));
    const handleToggleUser = (userId)=>{
        setSelectedUsers((prev)=>prev.includes(userId) ? prev.filter((id)=>id !== userId) : [
                ...prev,
                userId
            ]);
    };
    const handleCreate = ()=>{
        if (groupName.trim() && selectedUsers.length >= 1) {
            createGroupChat(groupName.trim(), selectedUsers);
            handleClose();
        }
    };
    const handleClose = ()=>{
        setGroupName("");
        setSelectedUsers([]);
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[var(--color-card)] rounded-2xl w-full max-w-md shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-[var(--color-border)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-[var(--color-foreground)]",
                                    children: "New Group"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-[var(--color-muted-foreground)]"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                    children: "Group Name"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: groupName,
                                    onChange: (e)=>setGroupName(e.target.value),
                                    placeholder: "Enter group name...",
                                    className: "w-full px-4 py-3 bg-[var(--color-input)] rounded-lg text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-[var(--color-foreground)] mb-2",
                                    children: [
                                        "Add Friends (",
                                        selectedUsers.length,
                                        " selected)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-60 overflow-y-auto custom-scrollbar border border-[var(--color-border)] rounded-lg",
                                    children: friendUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 text-center text-[var(--color-muted)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                className: "w-10 h-10 mx-auto mb-2 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: "No friends yet"
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm mt-1",
                                                children: "Add friends from the Users tab first"
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this) : friendUsers.map((user)=>{
                                        const isSelected = selectedUsers.includes(user.id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleToggleUser(user.id),
                                            className: `w-full p-3 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors ${isSelected ? "bg-[var(--color-accent)]" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: user.avatar || "/placeholder.svg",
                                                    alt: user.name,
                                                    className: "w-10 h-10 rounded-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-left font-medium text-[var(--color-foreground)]",
                                                    children: user.name
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? "bg-[var(--color-primary)] border-[var(--color-primary)]" : "border-[var(--color-border)]"}`,
                                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 40
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, user.id, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 p-4 border-t border-[var(--color-border)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "flex-1 py-3 px-4 rounded-lg border border-[var(--color-border)] font-medium text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreate,
                            disabled: !groupName.trim() || selectedUsers.length < 1 || friendUsers.length === 0,
                            className: "flex-1 py-3 px-4 rounded-lg bg-[var(--color-primary)] font-medium text-white hover:bg-[var(--color-primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: "Create Group"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * QuickChat - Sidebar Component
 *
 * Main navigation sidebar showing chat list, user profile,
 * and actions for creating new chats.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$socket$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/socket-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/friend-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/date-fns/formatDistanceToNow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$user$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/user-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$friend$2d$requests$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/friend-requests.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$group$2d$creation$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/group-creation-modal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Sidebar({ onMobileClose }) {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { chats, selectedChat, selectChat, getChatName, getChatAvatar, getOtherParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$socket$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSocket"])();
    const { getIncomingRequests } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFriend"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("chats");
    const [showGroupModal, setShowGroupModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get incoming requests count for badge
    const incomingRequestsCount = getIncomingRequests().length;
    // Filter chats based on search query
    const filteredChats = chats.filter((chat)=>getChatName(chat).toLowerCase().includes(searchQuery.toLowerCase()));
    // Sort chats by last message timestamp
    const sortedChats = [
        ...filteredChats
    ].sort((a, b)=>{
        const aTime = a.lastMessage?.timestamp || a.createdAt;
        const bTime = b.lastMessage?.timestamp || b.createdAt;
        return new Date(bTime).getTime() - new Date(aTime).getTime();
    });
    const handleChatSelect = (chatId)=>{
        selectChat(chatId);
        onMobileClose?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[var(--color-sidebar)] border-r border-[var(--color-border)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b border-[var(--color-border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: user?.avatar || "/placeholder.svg",
                                        alt: user?.name,
                                        className: "w-10 h-10 rounded-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${isConnected ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-[var(--color-foreground)]",
                                        children: user?.name
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--color-muted)]",
                                        children: isConnected ? "Online" : "Connecting..."
                                    }, void 0, false, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowGroupModal(true),
                                className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                                title: "New Group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-5 h-5 text-[var(--color-muted-foreground)]"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: logout,
                                className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                                title: "Logout",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-5 h-5 text-[var(--color-muted-foreground)]"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted)]"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search or start new chat",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "w-full pl-10 pr-4 py-2 bg-[var(--color-input)] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-[var(--color-border)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("chats"),
                        className: `flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === "chats" ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]" : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            "Chats"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("users"),
                        className: `flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === "users" ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]" : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            "Users"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("requests"),
                        className: `flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors relative ${activeTab === "requests" ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]" : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            "Requests",
                            incomingRequestsCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute top-2 right-2 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full",
                                children: incomingRequestsCount
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto custom-scrollbar",
                children: activeTab === "chats" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-[var(--color-border)]",
                    children: sortedChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center text-[var(--color-muted)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-12 h-12 mx-auto mb-3 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 155,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No chats found"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 156,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-1",
                                children: "Add friends to start chatting!"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                lineNumber: 157,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                        lineNumber: 154,
                        columnNumber: 15
                    }, this) : sortedChats.map((chat)=>{
                        const otherUser = getOtherParticipant(chat);
                        const isSelected = selectedChat?.id === chat.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleChatSelect(chat.id),
                            className: `w-full p-3 flex items-center gap-3 hover:bg-[var(--color-secondary)] transition-colors ${isSelected ? "bg-[var(--color-accent)]" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: getChatAvatar(chat) || "/placeholder.svg",
                                            alt: getChatName(chat),
                                            className: "w-12 h-12 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 23
                                        }, this),
                                        chat.type === "direct" && otherUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${otherUser.status === "online" ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"}`
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                            lineNumber: 179,
                                            columnNumber: 25
                                        }, this),
                                        chat.type === "group" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                className: "w-3 h-3 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                                lineNumber: 187,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                            lineNumber: 186,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-[var(--color-foreground)] truncate",
                                                    children: getChatName(chat)
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 25
                                                }, this),
                                                chat.lastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-[var(--color-muted)]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(chat.lastMessage.timestamp), {
                                                        addSuffix: false
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                            lineNumber: 193,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--color-muted-foreground)] truncate",
                                                    children: chat.lastMessage?.content || "No messages yet"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 25
                                                }, this),
                                                chat.unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 px-2 py-0.5 text-xs font-medium text-white bg-[var(--color-primary)] rounded-full",
                                                    children: chat.unreadCount
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                            lineNumber: 204,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                                    lineNumber: 192,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, chat.id, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                            lineNumber: 165,
                            columnNumber: 19
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this) : activeTab === "users" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$user$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserList"], {
                    onMobileClose: onMobileClose
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$friend$2d$requests$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FriendRequests"], {
                    onMobileClose: onMobileClose
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$group$2d$creation$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GroupCreationModal"], {
                isOpen: showGroupModal,
                onClose: ()=>setShowGroupModal(false)
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AlertDialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "alert-dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function AlertDialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "alert-dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function AlertDialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "alert-dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function AlertDialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "alert-dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function AlertDialogContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "alert-dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function AlertDialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function AlertDialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function AlertDialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "alert-dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-lg font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
function AlertDialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "alert-dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
function AlertDialogAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
function AlertDialogCancel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: 'outline'
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatHeader",
    ()=>ChatHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$utils$2f$dummy$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/utils/dummy-users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ChatHeader({ onBackClick }) {
    const { selectedChat, getChatName, getChatAvatar, getOtherParticipant, typingUsers, deleteChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const [showDeleteDialog, setShowDeleteDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!selectedChat) return null;
    const otherUser = getOtherParticipant(selectedChat);
    const chatTypingUsers = typingUsers[selectedChat.id] || [];
    const isTyping = chatTypingUsers.length > 0;
    // Get participant names for group chats
    const getParticipantNames = ()=>{
        if (selectedChat.type !== "group") return "";
        return selectedChat.participants.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$utils$2f$dummy$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === id)?.name || "Unknown").join(", ");
    };
    // Get typing indicator text
    const getTypingText = ()=>{
        if (!isTyping) return null;
        const typingNames = chatTypingUsers.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$utils$2f$dummy$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === id)?.name || "Someone").join(", ");
        return `${typingNames} is typing...`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between px-4 py-3 bg-[var(--color-card)] border-b border-[var(--color-border)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBackClick,
                        className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-5 h-5 text-[var(--color-muted-foreground)]"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: getChatAvatar(selectedChat) || "/placeholder.svg",
                                alt: getChatName(selectedChat),
                                className: "w-10 h-10 rounded-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            selectedChat.type === "direct" && otherUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--color-card)] ${otherUser.status === "online" ? "bg-[var(--color-online)]" : "bg-[var(--color-offline)]"}`
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            selectedChat.type === "group" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-3 h-3 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-[var(--color-foreground)]",
                                children: getChatName(selectedChat)
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--color-muted)]",
                                children: isTyping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--color-primary)] flex items-center gap-1",
                                    children: [
                                        getTypingText(),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "typing-dot w-1 h-1 rounded-full bg-[var(--color-primary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "typing-dot w-1 h-1 rounded-full bg-[var(--color-primary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "typing-dot w-1 h-1 rounded-full bg-[var(--color-primary)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this) : selectedChat.type === "direct" ? otherUser?.status === "online" ? "Online" : `Last seen ${otherUser?.lastSeen || "recently"}` : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate max-w-[200px] inline-block",
                                    children: getParticipantNames()
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                            className: "w-5 h-5 text-[var(--color-muted-foreground)]"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            className: "w-5 h-5 text-[var(--color-muted-foreground)]"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowDeleteDialog(true),
                        className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors text-red-500 hover:text-red-600",
                        title: "Delete chat",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: showDeleteDialog,
                onOpenChange: setShowDeleteDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    children: "Delete Chat"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    children: [
                                        "Are you sure you want to delete this chat with ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: getChatName(selectedChat)
                                        }, void 0, false, {
                                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                            lineNumber: 119,
                                            columnNumber: 62
                                        }, this),
                                        "? This action cannot be undone."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: ()=>{
                                        deleteChat(selectedChat.id);
                                        setShowDeleteDialog(false);
                                    },
                                    className: "bg-red-600 hover:bg-red-700",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageList",
    ()=>MessageList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * QuickChat - Message List Component
 *
 * Displays messages in a chat with proper styling for sent/received messages.
 * Features auto-scroll and message status indicators.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/check-check.js [app-ssr] (ecmascript) <export default as CheckCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$utils$2f$dummy$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/utils/dummy-users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/date-fns/isToday.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$isYesterday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/date-fns/isYesterday.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function MessageList() {
    const { selectedChat, messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Filter messages for selected chat
    const chatMessages = messages.filter((msg)=>msg.chatId === selectedChat?.id);
    // Auto-scroll to bottom when new messages arrive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        chatMessages.length
    ]);
    // Format timestamp
    const formatTime = (date)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(date), "HH:mm");
    };
    // Format date separator
    const formatDateSeparator = (date)=>{
        const d = new Date(date);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$isToday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isToday"])(d)) return "Today";
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$isYesterday$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isYesterday"])(d)) return "Yesterday";
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(d, "MMMM d, yyyy");
    };
    // Group messages by date
    const groupedMessages = [];
    let currentDate = "";
    chatMessages.forEach((msg)=>{
        const msgDate = formatDateSeparator(msg.timestamp);
        if (msgDate !== currentDate) {
            currentDate = msgDate;
            groupedMessages.push({
                date: msgDate,
                messages: [
                    msg
                ]
            });
        } else {
            groupedMessages[groupedMessages.length - 1].messages.push(msg);
        }
    });
    // Get message status icon
    const getStatusIcon = (status)=>{
        switch(status){
            case "sent":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-4 h-4 text-[var(--color-muted)]"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                    lineNumber: 61,
                    columnNumber: 16
                }, this);
            case "delivered":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                    className: "w-4 h-4 text-[var(--color-muted)]"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                    lineNumber: 63,
                    columnNumber: 16
                }, this);
            case "read":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCheck$3e$__["CheckCheck"], {
                    className: "w-4 h-4 text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                    lineNumber: 65,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    if (!selectedChat) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto custom-scrollbar p-4 chat-background",
        children: chatMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-10 h-10 text-[var(--color-primary)]",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        }, void 0, false, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-[var(--color-foreground)] mb-1",
                    children: "No messages yet"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[var(--color-muted)]",
                    children: "Send a message to start the conversation!"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
            lineNumber: 76,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                groupedMessages.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center my-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 text-xs font-medium text-[var(--color-muted-foreground)] bg-[var(--color-card)] rounded-lg shadow-sm",
                                    children: group.date
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            group.messages.map((message, msgIndex)=>{
                                const isSent = message.senderId === user?.id;
                                const sender = __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$utils$2f$dummy$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === message.senderId);
                                const showSenderName = selectedChat.type === "group" && !isSent && (msgIndex === 0 || group.messages[msgIndex - 1].senderId !== message.senderId);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex mb-1 ${isSent ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[70%] ${isSent ? "bg-[var(--color-message-sent)]" : "bg-[var(--color-message-received)]"} rounded-2xl px-4 py-2 shadow-sm ${isSent ? "rounded-br-md" : "rounded-bl-md"}`,
                                        children: [
                                            showSenderName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-[var(--color-primary)] mb-1",
                                                children: sender?.name || "Unknown"
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                                lineNumber: 124,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[var(--color-foreground)] text-sm leading-relaxed break-words",
                                                children: message.content
                                            }, void 0, false, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                                lineNumber: 130,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center gap-1 mt-1 ${isSent ? "justify-end" : "justify-start"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-[var(--color-muted)]",
                                                        children: formatTime(message.timestamp)
                                                    }, void 0, false, {
                                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this),
                                                    isSent && getStatusIcon(message.status)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                                lineNumber: 135,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                        lineNumber: 117,
                                        columnNumber: 21
                                    }, this)
                                }, message.id, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                                    lineNumber: 116,
                                    columnNumber: 19
                                }, this);
                            })
                        ]
                    }, groupIndex, true, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: messagesEndRef
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageInput",
    ()=>MessageInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/smile.js [app-ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$socket$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/socket-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MessageInput() {
    const { selectedChat, sendMessage, setTyping } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const { emit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$socket$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSocket"])();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typingTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Focus input when chat changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inputRef.current?.focus();
    }, [
        selectedChat?.id
    ]);
    // Handle typing indicator
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedChat) return;
        if (message && !isTyping) {
            setIsTyping(true);
            setTyping(selectedChat.id, true);
            emit("typing:start", {
                chatId: selectedChat.id
            });
        }
        // Clear previous timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        // Set new timeout to stop typing indicator
        typingTimeoutRef.current = setTimeout(()=>{
            if (isTyping) {
                setIsTyping(false);
                setTyping(selectedChat.id, false);
                emit("typing:stop", {
                    chatId: selectedChat.id
                });
            }
        }, 2000);
        return ()=>{
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, [
        message,
        selectedChat,
        isTyping,
        setTyping,
        emit
    ]);
    const handleSend = ()=>{
        if (!message.trim() || !selectedChat) return;
        sendMessage(message);
        setMessage("");
        setIsTyping(false);
        setTyping(selectedChat.id, false);
        emit("typing:stop", {
            chatId: selectedChat.id
        });
        inputRef.current?.focus();
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    if (!selectedChat) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 bg-[var(--color-card)] border-t border-[var(--color-border)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                        className: "w-6 h-6 text-[var(--color-muted-foreground)]"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                        className: "w-6 h-6 text-[var(--color-muted-foreground)]"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        onKeyPress: handleKeyPress,
                        placeholder: "Type a message...",
                        className: "w-full px-4 py-3 bg-[var(--color-input)] rounded-full text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                message.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSend,
                    className: "p-3 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        className: "w-5 h-5 text-white"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "p-3 rounded-full hover:bg-[var(--color-secondary)] transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                        className: "w-5 h-5 text-[var(--color-muted-foreground)]"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatWindow",
    ()=>ChatWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$chat$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/chat-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$message$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/message-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$message$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/message-input.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ChatWindow({ onBackClick }) {
    const { selectedChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    if (!selectedChat) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center bg-[var(--color-background)] text-center p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-24 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                        className: "w-12 h-12 text-[var(--color-primary)]"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-[var(--color-foreground)] mb-2",
                    children: "Welcome to QuickChat"
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[var(--color-muted)] max-w-md",
                    children: "Select a conversation from the sidebar or start a new chat to begin messaging. Your messages are fast, simple, and secure."
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex items-center gap-4 text-sm text-[var(--color-muted)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[var(--color-online)]"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "End-to-end encrypted"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[var(--color-primary)]"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Real-time messaging"
                                }, void 0, false, {
                                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$chat$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatHeader"], {
                onBackClick: onBackClick
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$message$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageList"], {}, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$message$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageInput"], {}, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * QuickChat - Home Page Component
 *
 * Main application layout with responsive sidebar and chat window.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$chat$2d$window$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/chat-window.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function HomePage() {
    const { selectedChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChat"])();
    const [showSidebar, setShowSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex overflow-hidden bg-[var(--color-background)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${selectedChat && !showSidebar ? "hidden" : "flex"} md:flex w-full md:w-[400px] lg:w-[420px] flex-shrink-0`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                        onMobileClose: ()=>setShowSidebar(false)
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${!selectedChat || showSidebar ? "hidden" : "flex"} md:flex flex-1 flex-col`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$chat$2d$window$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatWindow"], {
                    onBackClick: ()=>setShowSidebar(true)
                }, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickChatApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/chat-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$socket$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/socket-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/context/friend-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$login$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/login-page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$register$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/register-page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$home$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fsd_project/quick-chat-react-project (1)/components/home-page.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function AppContent() {
    const { isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [authMode, setAuthMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    // Show loading state
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[var(--color-background)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-full border-4 border-[var(--color-primary)] border-t-transparent animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--color-muted)]",
                        children: "Loading QuickChat..."
                    }, void 0, false, {
                        fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    // Show auth pages if not authenticated
    if (!isAuthenticated) {
        return authMode === "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$login$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoginPage"], {
            onSwitchToRegister: ()=>setAuthMode("register")
        }, void 0, false, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$register$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterPage"], {
            onSwitchToLogin: ()=>setAuthMode("login")
        }, void 0, false, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$socket$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SocketProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$chat$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$friend$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FriendProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$components$2f$home$2d$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomePage"], {}, void 0, false, {
                    fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function QuickChatApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$fsd_project$2f$quick$2d$chat$2d$react$2d$project__$28$1$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContent, {}, void 0, false, {
            fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/fsd_project/quick-chat-react-project (1)/app/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c173bf15._.js.map