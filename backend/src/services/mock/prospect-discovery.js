const mockProspects = [
  { name: "Joe's Pizza", phone: "555-0101", email: "joe@joespizza.com", category: "restaurant", address: "123 Main St", city: "New York", state: "NY", zip: "10001" },
  { name: "Smith Plumbing", phone: "555-0102", email: "contact@smithplumbing.com", category: "plumber", address: "456 Oak Ave", city: "Los Angeles", state: "CA", zip: "90001" },
  { name: "Sunset Salon", phone: "555-0103", email: "info@sunsetsalon.com", category: "beauty", address: "789 Beach Blvd", city: "Miami", state: "FL", zip: "33101" },
  { name: "Green Gardens Landscaping", phone: "555-0104", email: "hello@greengardens.com", category: "landscaping", address: "321 Garden Way", city: "Seattle", state: "WA", zip: "98101" },
  { name: "Downtown Auto Repair", phone: "555-0105", email: "service@downtownauto.com", category: "automotive", address: "654 Mechanic St", city: "Chicago", state: "IL", zip: "60601" }
];

const discoverProspects = async (filters = {}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let results = [...mockProspects];
  
  if (filters.category) {
    results = results.filter(p => p.category === filters.category);
  }
  
  if (filters.city) {
    results = results.filter(p => p.city.toLowerCase().includes(filters.city.toLowerCase()));
  }
  
  return results.map((p, index) => ({
    ...p,
    id: `mock-${index + 1}`,
    discovered_at: new Date().toISOString()
  }));
};

module.exports = { discoverProspects };
