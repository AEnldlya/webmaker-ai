'use client';

import { motion } from 'framer-motion';
import { User, Bell, Shield, CreditCard, Globe } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8 bg-cream min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-warm-gray-900 font-serif">Settings</h1>
        <p className="text-warm-gray-600 mt-1">Manage your account preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="retro-card p-6"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-amber-100 p-3 rounded-xl border border-amber-200">
              <User className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Profile</h3>
              <p className="text-warm-gray-500 text-sm">Update your personal information</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-warm-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="input-warm w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="input-warm w-full"
              />
            </div>
            <button className="btn-warm-primary mt-2">Save Changes</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="retro-card p-6"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-xl border border-blue-200">
              <Bell className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Notifications</h3>
              <p className="text-warm-gray-500 text-sm">Configure your notification preferences</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {['Email notifications', 'New prospect alerts', 'Payment notifications'].map((setting) => (
              <div key={setting} className="flex items-center justify-between py-2">
                <span className="text-warm-gray-700">{setting}</span>
                <button className="w-12 h-6 bg-amber-500 rounded-full relative transition-colors">
                  <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="retro-card p-6"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-sage/20 p-3 rounded-xl border border-sage/30">
              <CreditCard className="h-6 w-6 text-sage" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Billing</h3>
              <p className="text-warm-gray-500 text-sm">Manage your subscription and payment methods</p>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-warm-gray-900">Pro Plan</p>
                <p className="text-sm text-warm-gray-600">$79/month • Renews Jan 15, 2025</p>
              </div>
              <button className="btn-warm-secondary text-sm">Manage</button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="retro-card p-6"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-rose-100 p-3 rounded-xl border border-rose-200">
              <Shield className="h-6 w-6 text-terracotta" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Security</h3>
              <p className="text-warm-gray-500 text-sm">Manage your security settings</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <button className="w-full btn-warm-secondary">
              Change Password
            </button>
            <button className="w-full btn-warm-secondary">
              Enable Two-Factor Authentication
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="retro-card p-6"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-warm-gray-100 p-3 rounded-xl border border-warm-gray-200">
              <Globe className="h-6 w-6 text-warm-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-warm-gray-900 font-serif">Integrations</h3>
              <p className="text-warm-gray-500 text-sm">Connect your favorite tools</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {['Stripe', 'Vercel', 'GitHub', 'Google Workspace'].map((integration) => (
              <div key={integration} className="flex items-center justify-between py-2">
                <span className="text-warm-gray-700">{integration}</span>
                <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
