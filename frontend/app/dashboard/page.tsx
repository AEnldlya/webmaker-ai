'use client';

import { motion } from 'framer-motion';
import { DollarSign, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { name: 'Total Revenue', value: '$12,450', change: '+12%', icon: DollarSign },
  { name: 'Prospects', value: '48', change: '+8%', icon: Users },
  { name: 'Websites Built', value: '23', change: '+15%', icon: Globe },
  { name: 'Conversion Rate', value: '24%', change: '+4%', icon: TrendingUp },
];

const recentActivity = [
  { id: 1, action: 'New prospect discovered', target: "Joe's Pizza", time: '2 min ago' },
  { id: 2, action: 'Website generated', target: 'Smith Plumbing', time: '15 min ago' },
  { id: 3, action: 'Payment received', target: '$499 - Sunset Salon', time: '1 hour ago' },
  { id: 4, action: 'Website deployed', target: 'Green Gardens', time: '2 hours ago' },
];

export default function DashboardOverview() {
  return (
    <div className="p-8 bg-cream min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-warm-gray-900 font-serif">Dashboard</h1>
        <p className="text-warm-gray-600 mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="retro-card p-6 hover:shadow-warm-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-warm-gray-500 text-sm font-medium">{stat.name}</p>
                <p className="text-2xl font-bold text-warm-gray-900 mt-1 font-serif">{stat.value}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-xl border border-amber-200">
                <stat.icon className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sage text-sm font-medium">{stat.change}</span>
              <span className="text-warm-gray-400 text-sm ml-2">from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="retro-card overflow-hidden"
      >
        <div className="p-6 border-b border-warm-gray-200 bg-warm-white">
          <h2 className="text-xl font-semibold text-warm-gray-900 font-serif">Recent Activity</h2>
        </div>
        <div className="divide-y divide-warm-gray-200 bg-warm-white">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-6 flex items-center justify-between hover:bg-cream transition-colors">
              <div>
                <p className="text-warm-gray-900 font-medium">{activity.action}</p>
                <p className="text-warm-gray-500 text-sm">{activity.target}</p>
              </div>
              <span className="text-warm-gray-400 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 retro-card p-6"
      >
        <h2 className="text-xl font-semibold text-warm-gray-900 mb-4 font-serif">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-warm-primary">
            Find New Prospects
          </button>
          <button className="btn-warm-secondary">
            Build Website
          </button>
          <button className="btn-warm-secondary">
            View Reports
          </button>
        </div>
      </motion.div>
    </div>
  );
}
