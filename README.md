Next.js + KeystoneJS Project

A modern full-stack web application with Next.js frontend and KeystoneJS CMS backend.

## Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Database Installation

**macOS**
```bash
brew install postgresql
brew services start postgresql
```

**Windows**
Download and install from [postgresql.org](https://www.postgresql.org/download/windows/).

**Linux (Ubuntu/Debian)**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### Database Configuration

Before running the app, ensure you have the database and user set up.

```bash
# Create a database named 'keystone'
createdb keystone

# If you need to create the 'postgres' user (common on macOS/Linux)
createuser -s postgres
```


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

3. **Initialize database & Migrations**
   ```bash
   cd backend
   npm run dev
   ```
   Keystone will automatically connect to the database. If it's a new database, it will ask to apply the existing migrations. **Select 'yes' to apply migrations.**
   
   Create your admin user when prompted, then stop the server (Ctrl+C).

   > **Note:** To manually apply migrations without starting the server (e.g., for production):
   > ```bash
   > cd backend
   > npx keystone prisma migrate deploy
   > ```

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

Built with Next.js 16, React 18, KeystoneJS 6, and Tailwind CSS 4
