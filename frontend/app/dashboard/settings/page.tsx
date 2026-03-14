'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, User, Bell, Shield } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-2xl border border-gray-700"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-primary-600/20 p-3 rounded-xl">
              <User className="h-6 w-6 text-primary-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Profile</h3>
              <p className="text-gray-400 text-sm">Update your personal information</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800 p-6 rounded-2xl border border-gray-700"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-primary-600/20 p-3 rounded-xl">
              <Bell className="h-6 w-6 text-primary-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Notifications</h3>
              <p className="text-gray-400 text-sm">Configure your notification preferences</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {['Email notifications', 'New prospect alerts', 'Payment notifications'].map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <span className="text-gray-300">{setting}</span>
                <button className="w-12 h-6 bg-primary-600 rounded-full relative">
                  <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-2xl border border-gray-700"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-primary-600/20 p-3 rounded-xl">
              <Shield className="h-6 w-6 text-primary-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Security</h3>
              <p className="text-gray-400 text-sm">Manage your security settings</p>
            </div>
          </div>
          
          <button className="w-full bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600">
            Change Password
          </button>
        </motion.div>
      </div>
    </div>
  );
}
