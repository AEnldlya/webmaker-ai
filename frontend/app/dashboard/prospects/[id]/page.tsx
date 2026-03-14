'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, Globe, Clock, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ProspectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 bg-cream min-h-screen">
      <Link href="/dashboard/prospects" className="flex items-center text-warm-gray-600 hover:text-amber-600 mb-6 transition-colors">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Prospects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="retro-card overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-warm-gray-900 font-serif">Joe's Pizza</h1>
              <p className="text-warm-gray-600 mt-1">Restaurant • New York, NY</p>
            </div>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 border border-blue-200 rounded-full font-medium">
              New
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-warm-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  555-0101
                </div>
                <div className="flex items-center text-warm-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  joe@joespizza.com
                </div>
                <div className="flex items-center text-warm-gray-700">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  123 Main St, New York, NY 10001
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-warm-primary flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Business
                </button>
                <button className="w-full btn-warm-secondary flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send Email
                </button>
                <button className="w-full btn-warm-secondary flex items-center justify-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Generate Website
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-gray-200 p-8 bg-warm-white">
          <h3 className="text-lg font-semibold text-warm-gray-900 mb-4 font-serif">Activity History</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-2 rounded-lg border border-amber-200">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-warm-gray-900 font-medium">Prospect discovered</p>
                <p className="text-warm-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
