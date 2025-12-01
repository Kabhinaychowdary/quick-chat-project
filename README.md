# QuickChat - Student-Built Real-Time Messaging Application

A lightweight, modern real-time messaging application built by students using **Next.js, React, TypeScript, and localStorage**. Perfect for learning full-stack web development concepts including state management, context APIs, and real-time UI updates.

## 🎯 Features

### Core Messaging
- **Direct Messaging**: Send and receive messages in one-on-one conversations
- **Group Chats**: Create and manage group conversations with multiple users
- **Real-Time Status**: Track online/offline status and typing indicators
- **Message Status**: Track message delivery status (sent, delivered, read)
- **Chat Management**: Edit chat names/avatars, remove users, and delete entire conversations

### User Management
- **User Registration & Authentication**: Create accounts with email and password
- **User Directory**: Browse and search all registered users
- **Friend Requests**: Send, accept, and reject friend requests
- **Friend Management**: Remove friends and manage friendships
- **Cross-Tab Synchronization**: Data syncs across multiple browser tabs in real-time

### Status & Stories
- **Stories/Status Feature**: Share ephemeral status updates (like WhatsApp Stories)
- **Auto-Expiry**: Stories automatically expire after 24 hours
- **Viewer Tracking**: See who has viewed your stories

### UI/UX
- **Dark/Light Theme**: Automatic theme switching based on system preference
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Sign-In Page Default**: App starts at login for clean presentation
- **Student-Designed Logo**: Custom green chat bubble icon

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16 (App Router with Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components

**State Management:**
- React Context API
- Custom React Hooks

**Storage:**
- Browser localStorage for persistence
- Cross-tab synchronization with storage events

## 📋 Project Structure

```
quick-chat/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Home/main page
│   └── globals.css          # Global styles
├── components/              # React components (16 total)
│   ├── chat-header.tsx      # Chat header with delete option
│   ├── chat-window.tsx      # Message display area
│   ├── message-input.tsx    # Message composer
│   ├── message-list.tsx     # Messages list
│   ├── sidebar.tsx          # Left sidebar navigation
│   ├── user-list.tsx        # User directory
│   ├── friend-requests.tsx  # Friend request UI
│   ├── login-page.tsx       # Login form
│   ├── register-page.tsx    # Registration form
│   └── ui/                  # 45+ Reusable UI components
├── context/                 # React Context providers (5 contexts)
│   ├── auth-context.tsx     # Authentication state & login/register
│   ├── chat-context.tsx     # Chat, messages, and chat management
│   ├── friend-context.tsx   # Friend requests & friendships (global sync)
│   ├── socket-context.tsx   # Mock real-time events
│   └── stories-context.tsx  # Stories/status with auto-expiry
├── utils/                   # Utility functions
│   ├── dummy-users.ts       # User management (runtime registration)
│   ├── dummy-chats.ts       # Chat seed data (empty by default)
│   └── utils.ts             # Helper utilities
├── hooks/                   # Custom React hooks
│   ├── use-mobile.ts        # Mobile detection
│   └── use-toast.ts         # Toast notifications
├── public/                  # Static assets
│   └── icon.svg            # Student-designed chat bubble logo
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS theme
└── next.config.mjs         # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-github-url>
   cd quick-chat-react-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **(Optional) Start the json-server backend**
   This project includes a small `json-server` database (`db.json`). The app will
   continue to work with localStorage, but the storage adapter will try to sync
   data to the backend if it is running. To start it:

   ```bash
   npm run backend
   # opens json-server on http://localhost:4000
   ```

   If `json-server` is not installed globally, install it with:
   ```bash
   npm install -D json-server
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### First-Time Usage

1. **Register a new account**
   - Click "Sign Up" 
   - Enter name, email, password
   - Submit to create account

2. **Start a direct chat**
   - Go to "Users" tab
   - Select any user
   - Type message and send

3. **Send friend requests**
   - Go to "Requests" tab
   - Click "Send Request" on a user
   - Accept requests from others

4. **Create a group chat**
   - Select multiple users
   - Create group conversation
   - Add/remove members as needed

5. **Share stories**
   - Create status update (text or image)
   - Stories expire after 24 hours
   - See viewer list

## 💾 Data Storage & Architecture

### localStorage Keys
```
quickchat_registered_users   → All user accounts
quickchat_user               → Current logged-in user
quickchat_chats              → Chat list and metadata
quickchat_messages           → Message history
quickchat_all_requests_db    → Friend requests (global)
quickchat_all_friendships_db → Friendships (global)
quickchat_stories            → Status stories with expiry
```

### Real-Time Synchronization
- **Cross-Tab Sync**: Uses `storage` event listeners
- **Polling**: 2-second refresh intervals for live updates
- **No Backend Required**: All logic runs client-side

### How Multi-User Works (Same Browser)
1. User A registers → stored in localStorage
2. User A logs in → creates session
3. User A sends message → persisted
4. User A logs out → clears session
5. User B registers & logs in
6. User B can see User A's messages in shared localStorage
7. **Result**: Multiple users can interact via same persistent storage

## 🔄 Feature Explanations

### Authentication Flow
```
User Input → Registration/Login → Store in localStorage
             ↓
        Load on Next Session (unless cleared)
```

### Messaging Flow
```
User Types Message
      ↓
Send → Saved to localStorage immediately
      ↓
Status Updates: sent → delivered → read
      ↓
Other users see via storage events/polling
```

### Friend Request Flow
```
User A sends request
      ↓
Stored in global DB (quickchat_all_requests_db)
      ↓
User B sees in "Requests" tab
      ↓
User B accepts → Friendship created
      ↓
Both users synced via storage events
```

### Stories/Status Flow
```
User creates story
      ↓
Add 24-hour expiry timestamp
      ↓
Store in localStorage
      ↓
Viewers list tracked
      ↓
Auto-cleanup after expiry
```

## 🧪 Testing (Multiple Users Same Browser)

**Scenario: Alice chats with Bob**

1. **Register Alice**
   ```
   Name: Alice
   Email: alice@example.com
   Password: password123
   ```

2. **Send message to Bob**
   - Go to Users tab
   - Select "Bob" (or create new account)
   - Type "Hello Bob!" and send
   - Message appears in chat with timestamp

3. **Switch to Bob**
   - Logout Alice
   - Register Bob:
     ```
     Name: Bob
     Email: bob@example.com
     Password: password123
     ```

4. **Bob sees Alice's message**
   - Go to direct chat with Alice
   - See "Hello Bob!" from Alice
   - Reply with "Hi Alice!"

5. **Switch back to Alice**
   - Logout Bob
   - Login as Alice
   - See Bob's reply in real-time

## 📊 Presentation Prompt for ChatGPT

**Copy and paste this into ChatGPT to generate a presentation:**

```
Create a professional PowerPoint presentation for a student project with these details:

Project Name: QuickChat - Student-Built Real-Time Messaging App
Technology: Next.js 16, React 19, TypeScript, Tailwind CSS, localStorage
Duration: 15-20 minutes

Features Implemented:
1. User authentication (registration/login)
2. Direct and group messaging
3. Real-time typing indicators
4. Online/offline status
5. Friend request system
6. Stories/status feature (24-hour expiry)
7. Chat management (create, edit, delete)
8. Dark/light theme
9. Cross-tab synchronization
10. Message status tracking (sent/delivered/read)

Tech Highlights:
- React Context API for state management
- localStorage for persistence
- storage events for cross-tab sync
- TypeScript for type safety
- Tailwind CSS for responsive design
- Next.js App Router with Turbopack

Create slides for:
1. Project overview & problem statement
2. Key features demo (with descriptions)
3. Architecture diagram (Context API flow)
4. Technology justification
5. Data persistence model
6. How real-time sync works
7. Setup & deployment instructions
8. Future enhancements
9. Lessons learned & challenges
10. Q&A tips

Make it suitable for a 20-minute student presentation to faculty/peers.
Include technical diagrams and explanation of Context API usage.
```

## 🎓 Learning Outcomes

This project demonstrates:

- ✅ **Frontend Architecture**: Component-based design with React
- ✅ **State Management**: Context API + custom hooks pattern
- ✅ **Data Persistence**: localStorage with cross-tab communication
- ✅ **Real-Time Simulation**: Mock events without backend
- ✅ **TypeScript**: Type-safe development
- ✅ **CSS-in-JS**: Tailwind utility-first approach
- ✅ **Responsive Design**: Mobile-first layout
- ✅ **Dark Mode**: System preference detection
- ✅ **Git Workflow**: Version control best practices

## 🔮 Future Enhancements

- Backend API (Node.js/Express/Django)
- Real WebSocket integration
- Database (MongoDB/PostgreSQL)
- File/image sharing
- Voice/video calls
- Message search
- Message reactions
- Pin messages
- End-to-end encryption
- Cloud deployment

## 📦 Build & Deploy

### Development
```bash
npm run dev          # Start dev server on :3000
```

### Production Build
```bash
npm run build        # Build for production
npm start            # Run production build
```

### Deploy to Vercel (Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Then share the Vercel URL with your presentation!

## 🎨 Design Notes

- **Logo**: Custom green chat bubble (student-designed SVG)
- **Color Scheme**: WhatsApp-inspired green (#25D366)
- **Theme Colors**: Customizable via CSS variables
- **Component Library**: 45+ UI components from Radix UI
- **No Third-Party Branding**: 100% student project

## 📝 License

Student Project - Open for learning and demonstration purposes.

---

## 🚀 Quick Commands

```bash
npm install           # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run ESLint
```

## 👥 Team Credits

Built by the **QuickChat Student Team** as a full-stack web development learning project.

---

**Note:** This is a **client-side only application**. All data persists locally in the browser's localStorage. Data is cleared when browser cache is cleared.

**Questions? See the [GitHub discussions](#) or create an issue!**
