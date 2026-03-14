'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Scissors, UtensilsCrossed, Wrench, Stethoscope, ShoppingBag, Coffee, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    slug: 'salon',
    icon: Scissors,
    title: 'Hair Salon',
    businessName: 'Summer Street Hair Studio',
    description: 'Elegant, modern design for upscale hair salons and beauty studios. Clean aesthetics with appointment booking integration.',
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-600',
    features: ['Online Booking', 'Service Menu', 'Stylist Profiles', 'Gallery']
  },
  {
    slug: 'restaurant',
    icon: UtensilsCrossed,
    title: 'Restaurant',
    businessName: 'Bella Vista Bistro',
    description: 'Warm, inviting design perfect for restaurants and cafes. Features menu display and reservation system.',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-600',
    features: ['Digital Menu', 'Reservations', 'Photo Gallery', 'Reviews']
  },
  {
    slug: 'plumber',
    icon: Wrench,
    title: 'Plumbing Service',
    businessName: 'Quick Fix Plumbing',
    description: 'Trustworthy, professional design for home service businesses. Emphasizes reliability and emergency services.',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    features: ['Emergency Service', 'Service Areas', 'Pricing', 'Testimonials']
  },
  {
    slug: 'medical',
    icon: Stethoscope,
    title: 'Medical Clinic',
    businessName: 'CareFirst Clinic',
    description: 'Clean, calming design for healthcare providers. HIPAA-conscious with patient portal integration ready.',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-600',
    features: ['Appointments', 'Doctor Profiles', 'Services', 'Insurance Info']
  },
  {
    slug: 'retail',
    icon: ShoppingBag,
    title: 'Retail Store',
    businessName: 'Urban Boutique',
    description: 'Stylish, modern design for retail shops and boutiques. Product showcases with e-commerce ready.',
    color: 'from-violet-400 to-purple-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-600',
    features: ['Product Gallery', 'Store Hours', 'Location Map', 'Lookbook']
  },
  {
    slug: 'cafe',
    icon: Coffee,
    title: 'Coffee Shop',
    businessName: 'Morning Brew Coffee',
    description: 'Cozy, artisanal design for coffee shops and bakeries. Warm tones with menu and loyalty program features.',
    color: 'from-amber-600 to-yellow-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-700',
    features: ['Menu Board', 'Events', 'Loyalty Program', 'About Story']
  }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Back Link */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-warm-gray-700 hover:text-amber-600"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-600 font-medium text-sm uppercase tracking-wider"
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-warm-gray-900 mt-3 mb-4 font-serif"
          >
            Examples of Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-warm-gray-600 max-w-2xl mx-auto"
          >
            Explore fully functional demo websites built for different business types. 
            Each designed with unique themes tailored to the industry.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              >
                <Link href={`/portfolio/${item.slug}`}>
                  <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-8 h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group`}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-6 group-hover:shadow-lg transition-shadow`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-warm-gray-900 mb-2 font-serif">{item.title}</h3>
                    <p className={`${item.textColor} font-medium mb-3`}>{item.businessName}</p>
                    <p className="text-warm-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.features.map((feature, j) => (
                        <span 
                          key={j} 
                          className="text-xs font-medium px-3 py-1 bg-white/70 rounded-full text-warm-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`inline-flex items-center space-x-2 ${item.textColor} font-medium group-hover:underline`}>
                      <span>View Demo Website</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-warm-gray-900 mb-6 font-serif">
              Want a Website Like These?
            </h2>
            <p className="text-xl text-warm-gray-600 mb-10 leading-relaxed">
              We can build a custom website for your business in just 10 days. 
              Professional design, mobile-responsive, and ready to convert visitors into customers.
            </p>
            <Link 
              href="/register" 
              className="btn-warm-primary text-lg px-10 py-4 inline-flex items-center space-x-2 shadow-warm-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
