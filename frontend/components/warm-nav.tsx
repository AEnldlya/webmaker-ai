'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

interface NavProps {
  showHome?: boolean;
  showLinks?: { label: string; href: string }[];
}

export function WarmNav({ showHome = false, showLinks = [] }: NavProps) {
  return (
    <nav className="nav-warm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-amber-600" />
            </div>
            <span className="text-xl font-bold text-warm-gray-900 font-serif">WebMaker AI</span>
          </Link>
          <div className="flex items-center space-x-6">
            {showHome && (
              <Link href="/" className="text-warm-gray-600 hover:text-amber-600 transition-colors font-medium">
                Home
              </Link>
            )}
            {showLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-warm-gray-600 hover:text-amber-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" className="btn-warm-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
