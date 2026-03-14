# WebMaker AI

AI-powered platform for building and selling websites to local businesses.

## Features

- **Prospect Discovery**: Automatically find local businesses without websites
- **AI Website Generation**: Generate professional websites in minutes
- **One-Click Deployment**: Deploy to Vercel instantly
- **Payment Integration**: Collect payments via Stripe
- **Financial Tracking**: Track revenue and expenses
- **Custom Domains**: Purchase and configure domains

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 20+ (for local development)

### Docker Setup

```bash
# Clone the repository
git clone https://github.com/AEnldlya/webmaker-ai.git
cd webmaker-ai

# Start all services
docker-compose up -d

# Run database migrations
docker-compose exec backend npm run migrate
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- PostgreSQL: localhost:5432
- Redis: localhost:6379

### Local Development

```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run migrate
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

## Project Structure

```
webmaker-ai/
├── backend/           # Express.js API
├── frontend/          # Next.js 14 app
├── docs/             # Documentation
├── docker-compose.yml # Docker orchestration
└── README.md
```

## API Documentation

See [API.md](docs/API.md) for detailed API documentation.

## Deployment

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment instructions.

## Environment Variables

### Backend
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - JWT signing secret
- `STRIPE_SECRET_KEY` - Stripe API key
- `GITHUB_TOKEN` - GitHub personal access token
- `VERCEL_TOKEN` - Vercel API token

### Frontend
- `NEXT_PUBLIC_API_URL` - Backend API URL

## License

MIT
