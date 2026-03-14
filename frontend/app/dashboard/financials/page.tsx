'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
];

const stats = [
  { name: 'Total Revenue', value: '$12,450', change: '+12%', icon: DollarSign, positive: true },
  { name: 'Total Expenses', value: '$3,240', change: '-5%', icon: Wallet, positive: true },
  { name: 'Net Profit', value: '$9,210', change: '+18%', icon: TrendingUp, positive: true },
  { name: 'Pending', value: '$1,500', change: '+3', icon: TrendingDown, positive: false },
];

const transactions = [
  { id: 1, type: 'income', description: 'Sunset Salon - Website', amount: 499, date: '2024-01-15' },
  { id: 2, type: 'expense', description: 'Domain purchase', amount: -12, date: '2024-01-14' },
  { id: 3, type: 'income', description: 'Smith Plumbing - Website', amount: 599, date: '2024-01-12' },
  { id: 4, type: 'expense', description: 'Vercel Pro', amount: -20, date: '2024-01-10' },
];

export default function FinancialsPage() {
  return (
    <div className="p-8 bg-cream min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-warm-gray-900 font-serif">Financials</h1>
        <p className="text-warm-gray-600 mt-1">Track your revenue and expenses</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="retro-card p-6 hover:shadow-warm-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-warm-gray-500 text-sm">{stat.name}</p>
                <p className="text-2xl font-bold text-warm-gray-900 mt-1 font-serif">{stat.value}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-xl border border-amber-200">
                <stat.icon className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${stat.positive ? 'text-sage' : 'text-terracotta'}`}>
                {stat.change}
              </span>
              <span className="text-warm-gray-400 text-sm ml-2">from last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="retro-card p-6 mb-8"
      >
        <h2 className="text-xl font-semibold text-warm-gray-900 mb-6 font-serif">Revenue vs Expenses</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="name" stroke="#78716c" />
              <YAxis stroke="#78716c" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fffefb', border: '1px solid #e7e5e4', borderRadius: '12px' }}
                labelStyle={{ color: '#1c1917' }}
              />
              <Bar dataKey="revenue" fill="#d97706" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="#c65d3b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="retro-card overflow-hidden"
      >
        <div className="p-6 border-b border-warm-gray-200 bg-warm-white">
          <h2 className="text-xl font-semibold text-warm-gray-900 font-serif">Recent Transactions</h2>
        </div>
        <div className="divide-y divide-warm-gray-200 bg-warm-white">
          {transactions.map((tx) => (
            <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-cream transition-colors">
              <div>
                <p className="text-warm-gray-900 font-medium">{tx.description}</p>
                <p className="text-warm-gray-500 text-sm">{tx.date}</p>
              </div>
              <span className={`font-semibold ${tx.amount > 0 ? 'text-sage' : 'text-terracotta'}`}>
                {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount)}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
