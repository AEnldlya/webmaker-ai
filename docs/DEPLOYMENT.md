# Deployment Guide

## Docker Deployment

### Production Setup

1. **Environment Variables**

Create a `.env` file in the project root:

```bash
# Database
DATABASE_URL=postgresql://user:pass@postgres:5432/webmaker

# Redis
REDIS_URL=redis://redis:6379

# JWT
JWT_SECRET=your_secure_jwt_secret

# APIs
STRIPE_SECRET_KEY=sk_live_...
GITHUB_TOKEN=ghp_...
VERCEL_TOKEN=vercel_token_here
```

2. **Start Services**

```bash
docker-compose -f docker-compose.yml up -d
```

3. **Run Migrations**

```bash
docker-compose exec backend npm run migrate
```

## Vercel Deployment (Frontend)

1. **Install Vercel CLI**

```bash
npm i -g vercel
```

2. **Deploy**

```bash
cd frontend
vercel --prod
```

3. **Environment Variables in Vercel**

Set in Vercel dashboard:
- `NEXT_PUBLIC_API_URL` - Your backend API URL

## Backend Deployment

### Option 1: Railway/Render

1. Push code to GitHub
2. Connect repository to Railway or Render
3. Set environment variables
4. Deploy

### Option 2: VPS (DigitalOcean, AWS, etc.)

1. **Setup Server**

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

2. **Clone and Deploy**

```bash
git clone https://github.com/AEnldlya/webmaker-ai.git
cd webmaker-ai
docker-compose up -d
```

3. **Setup Nginx (Optional)**

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Database Backups

### Automated Backups

Add to `docker-compose.yml`:

```yaml
  backup:
    image: postgres:15-alpine
    volumes:
      - ./backups:/backups
    command: |
      sh -c 'while true; do
        pg_dump -h postgres -U webmaker webmaker > /backups/backup_$$(date +%Y%m%d_%H%M%S).sql
        sleep 86400
      done'
```

### Manual Backup

```bash
docker-compose exec postgres pg_dump -U webmaker webmaker > backup.sql
```

## SSL/HTTPS

### Using Let's Encrypt with Nginx

```bash
# Install certbot
apt-get install certbot python3-certbot-nginx

# Obtain certificate
certbot --nginx -d api.yourdomain.com
```

## Monitoring

### Health Checks

The backend exposes a health endpoint:

```
GET /health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:00:00Z"
}
```

### Logs

```bash
# View all logs
docker-compose logs -f

# View specific service
docker-compose logs -f backend
```

## Updating

```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose up -d --build

# Run migrations
docker-compose exec backend npm run migrate
```
