'use client';

import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Globe, 
  CreditCard, 
  Settings,
  LogOut,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { href: '/dashboard/prospects', icon: Users, label: 'Prospects' },
  { href: '/dashboard/websites', icon: Globe, label: 'Websites' },
  { href: '/dashboard/financials', icon: CreditCard, label: 'Financials' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-warm-white border-r border-warm-gray-200 flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-amber-600" />
            </div>
            <span className="text-xl font-bold text-warm-gray-900 font-serif">WebMaker AI</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                    : 'text-warm-gray-600 hover:bg-warm-gray-100 hover:text-warm-gray-900'
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-amber-600' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-warm-gray-200">
          <button className="flex items-center space-x-3 px-4 py-3 text-warm-gray-500 hover:text-warm-gray-800 w-full rounded-xl hover:bg-warm-gray-100 transition-colors">
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
