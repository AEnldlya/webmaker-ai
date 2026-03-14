'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ProspectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <Link href="/dashboard/prospects" className="flex items-center text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Prospects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Joe's Pizza</h1>
              <p className="text-gray-400 mt-1">Restaurant • New York, NY</p>
            </div>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full font-medium">
              New
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-gray-500" />
                  555-0101
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-gray-500" />
                  joe@joespizza.com
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                  123 Main St, New York, NY 10001
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 text-white py-3 rounded-xl font-medium hover:bg-primary-700 flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Business
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600 flex items-center justify-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Generate Website
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 p-8">
          <h3 className="text-lg font-semibold text-white mb-4">Activity History</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-700 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <div>
                <p className="text-white">Prospect discovered</p>
                <p className="text-gray-400 text-sm">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
