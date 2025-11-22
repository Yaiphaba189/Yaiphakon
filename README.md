Next.js + KeystoneJS Project

A modern full-stack web application with Next.js frontend and KeystoneJS CMS backend.

## Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Setup

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo-url>
   cd project
   npm install
   cd backend && npm install
   ```

2. **Configure database**
   
   Create `backend/.env`:
   ```env
   DATABASE_URL="postgres://postgres:postgres@localhost:5432/keystone"
   ```

3. **Initialize database**
   ```bash
   cd backend
   npm run dev
   ```
   Create your admin user when prompted, then stop the server (Ctrl+C).

## Development

Run both servers in separate terminals:

```bash
# Terminal 1 - Backend (port 4000)
cd backend && npm run dev

# Terminal 2 - Frontend (port 3000)
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Admin CMS: [http://localhost:4000](http://localhost:4000)

## Production Build

```bash
# Build frontend
npm run build
npm start

# Build backend
cd backend
npm run build
npm start
```

---

Built with Next.js 16, React 19, KeystoneJS 6, and Tailwind CSS 4
