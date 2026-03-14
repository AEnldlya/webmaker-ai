// API client for backend communication
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function fetchProspects() {
  const res = await fetch(`${API_URL}/prospects`);
  return res.json();
}

export async function discoverProspects(data: { category?: string; city?: string }) {
  const res = await fetch(`${API_URL}/prospects/discover`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchWebsites() {
  const res = await fetch(`${API_URL}/websites`);
  return res.json();
}

export async function createWebsite(data: { prospect_id: string; business_name: string; business_type: string }) {
  const res = await fetch(`${API_URL}/websites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function generateWebsite(websiteId: string) {
  const res = await fetch(`${API_URL}/websites/${websiteId}/generate`, {
    method: 'POST',
  });
  return res.json();
}

export async function deployWebsite(websiteId: string) {
  const res = await fetch(`${API_URL}/websites/${websiteId}/deploy`, {
    method: 'POST',
  });
  return res.json();
}

export async function fetchFinancialsSummary() {
  const res = await fetch(`${API_URL}/financials/summary`);
  return res.json();
}
