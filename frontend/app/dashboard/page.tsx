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
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800 p-6 rounded-2xl border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.name}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className="bg-primary-600/20 p-3 rounded-xl">
                <stat.icon className="h-6 w-6 text-primary-500" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              <span className="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-800 rounded-2xl border border-gray-700"
      >
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-700">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="p-6 flex items-center justify-between">
              <div>
                <p className="text-white font-medium">{activity.action}</p>
                <p className="text-gray-400 text-sm">{activity.target}</p>
              </div>
              <span className="text-gray-500 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
