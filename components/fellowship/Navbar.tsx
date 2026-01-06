// import React from 'react';

// const Navbar = () => {
//     return (
//         <div>
//             Navbar
//         </div>
//     );
// };

// export default Navbar;






'use client';

import React from 'react';
import { CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Resources', href: '/resources' },
    { label: 'Fellowship', href: '/fellowships' },
    { label: 'Scholarships', href: '/scholarships' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
        
                      <div>
                        <Image
                          src="Images/Logo.svg"
                          alt="Company's blue G logo"
                          width={60}
                          height={60}
                          className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16'
                        />
                      </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-[#070750]">Global Dreams Connect</h1>
              <p className="text-sm text-gray-600">Fresh Minds, Global Futures...</p>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#070750] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* User Profile Button */}
          <div className="flex items-center">
            <Button variant="outline" className="rounded-xl border-gray-300">
        
              <CircleUser className="h-5 w-5 text-[#070750] mr-2"/>
              <span className="text-[#070750] font-medium">Oluwabukunmi</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Optional - simple version) */}
      {/* You can expand this with a sheet/mobile menu if needed */}
      <div className="md:hidden border-t border-gray-200">
        <nav className="flex overflow-x-auto px-4 py-2 space-x-6 whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#070750] font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

