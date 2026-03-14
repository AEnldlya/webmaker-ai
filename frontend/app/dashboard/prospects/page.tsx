'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Phone, Mail, MapPin, MoreVertical } from 'lucide-react';
import Link from 'next/link';

const mockProspects = [
  { id: 1, name: "Joe's Pizza", phone: '555-0101', email: 'joe@joespizza.com', category: 'Restaurant', city: 'New York', status: 'New' },
  { id: 2, name: 'Smith Plumbing', phone: '555-0102', email: 'contact@smithplumbing.com', category: 'Plumber', city: 'Los Angeles', status: 'Contacted' },
  { id: 3, name: 'Sunset Salon', phone: '555-0103', email: 'info@sunsetsalon.com', category: 'Beauty', city: 'Miami', status: 'Interested' },
  { id: 4, name: 'Green Gardens', phone: '555-0104', email: 'hello@greengardens.com', category: 'Landscaping', city: 'Seattle', status: 'New' },
  { id: 5, name: 'Downtown Auto', phone: '555-0105', email: 'service@downtownauto.com', category: 'Automotive', city: 'Chicago', status: 'Closed' },
];

export default function ProspectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProspects = mockProspects.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Contacted': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Interested': return 'bg-sage/20 text-sage border-sage/30';
      case 'Closed': return 'bg-warm-gray-100 text-warm-gray-700 border-warm-gray-200';
      default: return 'bg-warm-gray-100 text-warm-gray-600 border-warm-gray-200';
    }
  };

  return (
    <div className="p-8 bg-cream min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-warm-gray-900 font-serif">Prospects</h1>
          <p className="text-warm-gray-600 mt-1">Manage your potential clients</p>
        </div>
        <button className="btn-warm-primary flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Discover New</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-warm-gray-400" />
        <input
          type="text"
          placeholder="Search prospects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-warm w-full pl-12"
        />
      </div>

      {/* Prospects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="retro-card overflow-hidden"
      >
        <table className="w-full">
          <thead className="bg-warm-gray-50 border-b border-warm-gray-200">
            <tr>
              <th className="text-left text-warm-gray-600 font-medium py-4 px-6">Business</th>
              <th className="text-left text-warm-gray-600 font-medium py-4 px-6">Contact</th>
              <th className="text-left text-warm-gray-600 font-medium py-4 px-6">Category</th>
              <th className="text-left text-warm-gray-600 font-medium py-4 px-6">Location</th>
              <th className="text-left text-warm-gray-600 font-medium py-4 px-6">Status</th>
              <th className="text-right text-warm-gray-600 font-medium py-4 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-gray-200 bg-warm-white">
            {filteredProspects.map((prospect) => (
              <tr key={prospect.id} className="hover:bg-cream transition-colors">
                <td className="py-4 px-6">
                  <Link href={`/dashboard/prospects/${prospect.id}`} className="text-warm-gray-900 font-medium hover:text-amber-600 transition-colors">
                    {prospect.name}
                  </Link>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <div className="flex items-center text-warm-gray-500 text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      {prospect.phone}
                    </div>
                    <div className="flex items-center text-warm-gray-500 text-sm">
                      <Mail className="h-4 w-4 mr-2" />
                      {prospect.email}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-warm-gray-700">{prospect.category}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center text-warm-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {prospect.city}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(prospect.status)}`}>
                    {prospect.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-warm-gray-400 hover:text-warm-gray-700 transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
