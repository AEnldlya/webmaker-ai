'use client';

import { motion } from 'framer-motion';
import { Globe, ExternalLink, Github, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

const mockWebsites = [
  { id: 1, business_name: "Joe's Pizza", business_type: 'Restaurant', status: 'deployed', vercel_url: 'https://joes-pizza.vercel.app', github_url: 'https://github.com/user/joes-pizza', lighthouse_score: 92 },
  { id: 2, business_name: 'Smith Plumbing', business_type: 'Plumber', status: 'generated', vercel_url: null, github_url: 'https://github.com/user/smith-plumbing', lighthouse_score: 88 },
  { id: 3, business_name: 'Sunset Salon', business_type: 'Beauty', status: 'draft', vercel_url: null, github_url: null, lighthouse_score: null },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'deployed': return <CheckCircle className="h-5 w-5 text-sage" />;
    case 'generated': return <Clock className="h-5 w-5 text-amber-600" />;
    default: return <Clock className="h-5 w-5 text-warm-gray-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'deployed': return 'bg-sage/20 text-sage border-sage/30';
    case 'generated': return 'bg-amber-100 text-amber-700 border-amber-200';
    default: return 'bg-warm-gray-100 text-warm-gray-600 border-warm-gray-200';
  }
};

export default function WebsitesPage() {
  return (
    <div className="p-8 bg-cream min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-warm-gray-900 font-serif">Websites</h1>
          <p className="text-warm-gray-600 mt-1">Manage your generated websites</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWebsites.map((website, i) => (
          <motion.div
            key={website.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="retro-card overflow-hidden hover:shadow-warm-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-amber-100 p-3 rounded-xl border border-amber-200">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 border ${getStatusColor(website.status)}`}>
                  {getStatusIcon(website.status)}
                  <span className="capitalize">{website.status}</span>
                </span>
              </div>

              <Link href={`/dashboard/websites/${website.id}`}>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-1 hover:text-amber-600 transition-colors font-serif">
                  {website.business_name}
                </h3>
              </Link>
              <p className="text-warm-gray-500 text-sm mb-4">{website.business_type}</p>

              {website.lighthouse_score && (
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-warm-gray-500 text-sm">Lighthouse:</span>
                  <span className={`font-semibold ${
                    website.lighthouse_score >= 90 ? 'text-sage' :
                    website.lighthouse_score >= 70 ? 'text-amber-600' : 'text-terracotta'
                  }`}>
                    {website.lighthouse_score}
                  </span>
                </div>
              )}

              <div className="flex space-x-2">
                {website.vercel_url && (
                  <a
                    href={website.vercel_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-warm-gray-100 text-warm-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-warm-gray-200 flex items-center justify-center space-x-1 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Live</span>
                  </a>
                )}
                {website.github_url && (
                  <a
                    href={website.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-warm-gray-100 text-warm-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-warm-gray-200 flex items-center justify-center space-x-1 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
