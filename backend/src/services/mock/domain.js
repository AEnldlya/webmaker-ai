const searchDomains = async (keyword) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const tlds = ['.com', '.net', '.co', '.io'];
  const baseName = keyword.toLowerCase().replace(/\s+/g, '');
  
  return tlds.map(tld => ({
    domain: `${baseName}${tld}`,
    available: Math.random() > 0.3,
    price_cents: Math.floor(Math.random() * 5000) + 1000,
    registrar: 'namecheap'
  })).filter(d => d.available);
};

const purchaseDomain = async (domainData) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    success: true,
    domain: domainData.domain,
    order_id: `ORD-${Date.now()}`,
    purchased_at: new Date().toISOString()
  };
};

const configureDNS = async (domain, targetUrl) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    domain,
    records: [
      { type: 'A', name: '@', value: '76.76.21.21' },
      { type: 'CNAME', name: 'www', value: 'cname.vercel-dns.com' }
    ]
  };
};

module.exports = { searchDomains, purchaseDomain, configureDNS };
