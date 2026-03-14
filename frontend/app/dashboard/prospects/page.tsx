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
      case 'New': return 'bg-blue-500/20 text-blue-400';
      case 'Contacted': return 'bg-yellow-500/20 text-yellow-400';
      case 'Interested': return 'bg-green-500/20 text-green-400';
      case 'Closed': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Prospects</h1>
          <p className="text-gray-400 mt-1">Manage your potential clients</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-primary-700">
          <Plus className="h-5 w-5" />
          <span>Discover New</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search prospects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Prospects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
      >
        <table className="w-full">
          <thead className="bg-gray-700/50">
            <tr>
              <th className="text-left text-gray-400 font-medium py-4 px-6">Business</th>
              <th className="text-left text-gray-400 font-medium py-4 px-6">Contact</th>
              <th className="text-left text-gray-400 font-medium py-4 px-6">Category</th>
              <th className="text-left text-gray-400 font-medium py-4 px-6">Location</th>
              <th className="text-left text-gray-400 font-medium py-4 px-6">Status</th>
              <th className="text-right text-gray-400 font-medium py-4 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProspects.map((prospect) => (
              <tr key={prospect.id} className="hover:bg-gray-700/30">
                <td className="py-4 px-6">
                  <Link href={`/dashboard/prospects/${prospect.id}`} className="text-white font-medium hover:text-primary-500">
                    {prospect.name}
                  </Link>
                </td>
                <td className="py-4 px-6">
                  <div className="space-y-1">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      {prospect.phone}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Mail className="h-4 w-4 mr-2" />
                      {prospect.email}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-300">{prospect.category}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {prospect.city}
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(prospect.status)}`}>
                    {prospect.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-gray-400 hover:text-white">
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
