# 📝 Scribbly - MERN Notes App

A modern and responsive notes-taking application built with the **MERN stack**. Scribbly allows you to create, view, update, and delete notes with a clean UI and smooth UX.

🌐 **Live Demo:** [Scribbly on Render](https://dineshkumar-scribbly-using-mern.onrender.com/)

---

## 🚀 Features

- ✍️ Create a new note
- 📋 View all notes
- 📝 Edit existing notes
- 🗑 Delete notes
- ⚠️ Gracefully handles API rate limits
- 🔔 Real-time toast notifications

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- DaisyUI
- Lucide React
- Axios
- React Hot Toast

### Backend:
- Node.js
- Express.js
- MongoDB
- CORS
- Upstash Redis (for rate limiting)

---

## 📦 Installation

### Prerequisites:
- Node.js and npm
- MongoDB URI (local or Atlas)
- Upstash Redis credentials

### 1. Clone the repository:
```bash
https://github.com/dineshkumarc9102/Dineshkumar_Scribbly_Using_MERN/
cd backend
npm install
# Create a .env file and add:
# MONGO_URI=your_mongodb_uri
# UPSTASH_REDIS_REST_URL=your_upstash_url
# UPSTASH_REDIS_REST_TOKEN=your_upstash_token
npm run dev

cd ../frontend
npm install
npm run dev


Let me know if you'd like to include deployment instructions for Render, or other platforms.

