'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Super
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/menu" className={`${isActive('/menu')} font-medium relative group`}>
              Menu
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <Link href="/about" className={`${isActive('/about')} font-medium relative group`}>
              About
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <Link href="/contact" className={`${isActive('/contact')} font-medium relative group`}>
              Contact
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
