# API Documentation

## Base URL

```
http://localhost:3001/api
```

## Prospects

### List Prospects
```
GET /prospects
```

Query Parameters:
- `limit` (number, optional) - Default: 100
- `offset` (number, optional) - Default: 0

### Discover Prospects
```
POST /prospects/discover
```

Request Body:
```json
{
  "category": "restaurant",
  "city": "New York"
}
```

### Get Prospect
```
GET /prospects/:id
```

### Update Prospect
```
PUT /prospects/:id
```

Request Body:
```json
{
  "name": "Joe's Pizza",
  "phone": "555-0101",
  "email": "joe@joespizza.com",
  "category": "restaurant",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "call_status": "contacted"
}
```

### Delete Prospect
```
DELETE /prospects/:id
```

## Websites

### List Websites
```
GET /websites
```

### Create Website
```
POST /websites
```

Request Body:
```json
{
  "prospect_id": "uuid",
  "business_name": "Joe's Pizza",
  "business_type": "restaurant"
}
```

### Get Website
```
GET /websites/:id
```

### Generate Website
```
POST /websites/:id/generate
```

Response:
```json
{
  "success": true,
  "data": {
    "website": { ... },
    "generated": {
      "id": "uuid",
      "html_content": "...",
      "files": [...],
      "lighthouse_score": 92
    }
  }
}
```

### Deploy Website
```
POST /websites/:id/deploy
```

Response:
```json
{
  "success": true,
  "data": {
    "website": { ... },
    "deployment": {
      "deployment_id": "dpl_...",
      "status": "ready",
      "preview_url": "https://...",
      "deployed_at": "2024-01-15T10:00:00Z"
    }
  }
}
```

## Payments

### List Payments
```
GET /payments
```

### Create Payment Link
```
POST /payments/create-link
```

Request Body:
```json
{
  "website_id": "uuid",
  "amount_cents": 49900
}
```

### Webhook
```
POST /payments/webhook
```

## Domains

### Search Domains
```
POST /domains/search
```

Request Body:
```json
{
  "keyword": "joespizza"
}
```

### Purchase Domain
```
POST /domains/purchase
```

Request Body:
```json
{
  "website_id": "uuid",
  "domain_name": "joespizza.com",
  "price_cents": 1200
}
```

### Configure DNS
```
POST /domains/configure-dns
```

Request Body:
```json
{
  "domain": "joespizza.com",
  "target_url": "https://joes-pizza.vercel.app"
}
```

## Financials

### Get Summary
```
GET /financials/summary
```

Response:
```json
{
  "success": true,
  "data": {
    "summary": [...],
    "total_revenue_cents": 1245000
  }
}
```

### Get Daily Summary
```
GET /financials/daily
```

### Get Monthly Summary
```
GET /financials/monthly
```

## Error Responses

All errors follow this format:

```json
{
  "success": false,
  "error": "Error message"
}
```

Common HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error
