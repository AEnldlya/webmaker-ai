'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Globe, Zap, CheckCircle, RefreshCw, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function WebsiteDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 bg-cream min-h-screen">
      <Link href="/dashboard/websites" className="flex items-center text-warm-gray-600 hover:text-amber-600 mb-6 transition-colors">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Websites
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
              <p className="text-warm-gray-600 mt-1">Restaurant Website</p>
            </div>
            <span className="px-4 py-2 bg-sage/20 text-sage border border-sage/30 rounded-full font-medium flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Deployed
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="retro-card p-6 bg-amber-50 border-amber-200">
              <p className="text-warm-gray-600 text-sm">Lighthouse Score</p>
              <p className="text-3xl font-bold text-sage mt-1 font-serif">92</p>
            </div>
            <div className="retro-card p-6">
              <p className="text-warm-gray-600 text-sm">Status</p>
              <p className="text-3xl font-bold text-warm-gray-900 mt-1 font-serif">Live</p>
            </div>
            <div className="retro-card p-6">
              <p className="text-warm-gray-600 text-sm">Created</p>
              <p className="text-3xl font-bold text-warm-gray-900 mt-1 font-serif">Jan 15</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://joes-pizza.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-warm-primary flex items-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Live Site
              </a>
              <a
                href="https://github.com/user/joes-pizza"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-warm-secondary flex items-center"
              >
                <Github className="h-5 w-5 mr-2" />
                View Code
              </a>
              <button className="btn-warm-secondary flex items-center">
                <RefreshCw className="h-5 w-5 mr-2" />
                Regenerate
              </button>
              <button className="px-6 py-3 rounded-xl font-medium border border-terracotta text-terracotta hover:bg-terracotta/10 flex items-center transition-colors">
                <Trash2 className="h-5 w-5 mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-gray-200 p-8 bg-warm-white">
          <h3 className="text-lg font-semibold text-warm-gray-900 mb-4 font-serif">Deployment History</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-cream rounded-xl border border-warm-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-warm-gray-900 font-medium">Production Deployment</p>
                  <p className="text-warm-gray-500 text-sm">dpl_abc123xyz</p>
                </div>
              </div>
              <span className="text-sage font-medium">Ready</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
