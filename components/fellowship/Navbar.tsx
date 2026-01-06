

// 'use client';

// import React from 'react';
// import { CircleUser } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// const Navbar = () => {
//   const navLinks = [
//     { label: 'Home', href: '/' },
//     { label: 'How it works', href: '/how-it-works' },
//     { label: 'Resources', href: '/resources' },
//     { label: 'Fellowship', href: '/fellowships' },
//     { label: 'Scholarships', href: '/scholarships' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex items-center">

//                       <div>
//                         <Image
//                           src="Images/Logo.svg"
//                           alt="Company's blue G logo"
//                           width={60}
//                           height={60}
//                           className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16'
//                         />
//                       </div>
//             <div className="ml-3">
//               <h1 className="text-2xl font-bold text-[#070750]">Global Dreams Connect</h1>
//               <p className="text-sm text-gray-600">Fresh Minds, Global Futures...</p>
//             </div>
//           </div>

//           {/* Navigation Links - Desktop */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-gray-700 hover:text-[#070750] font-medium transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>

//           {/* User Profile Button */}
//           <div className="flex items-center">
//             <Button variant="outline" className="rounded-xl border-gray-300">

//               <CircleUser className="h-5 w-5 text-[#070750] mr-2"/>
//               <span className="text-[#070750] font-medium">Oluwabukunmi</span>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Optional - simple version) */}
//       {/* You can expand this with a sheet/mobile menu if needed */}
//       <div className="md:hidden border-t border-gray-200">
//         <nav className="flex overflow-x-auto px-4 py-2 space-x-6 whitespace-nowrap">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-gray-700 hover:text-[#070750] font-medium"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


















'use client';

import React, { useState } from 'react';
import { CircleUser, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import Image from 'next/image';

const Navbar = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Resources', href: '/resources' },
    { label: 'Fellowship', href: '/fellowships' },
    { label: 'Scholarships', href: '/scholarships' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/Images/Logo.svg"
              alt="Company's blue G logo"
              width={60}
              height={60}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
            />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-[#070750]">
                Global Dreams Connect
              </h1>
              <p className="text-sm text-gray-600">
                Fresh Minds, Global Futures...
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
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

          {/* Right side: User button + Mobile menu trigger */}
          <div className="flex items-center gap-4">
            {/* User Profile Button (visible on all screens) */}
            <Button variant="outline" className="rounded-xl border-gray-300 hidden sm:flex">
              <CircleUser className="h-5 w-5 text-[#070750] mr-2" />
              <span className="text-[#070750] font-medium">Oluwabukunmi</span>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col gap-8 mt-8">
                  {/* Optional: repeat logo in sheet */}
                  <div className="flex items-center px-4">
                    <Image
                      src="/Images/Logo.svg"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <div className="ml-3">
                      <h2 className="text-xl font-bold text-[#070750]">
                        Global Dreams Connect
                      </h2>
                    </div>
                  </div>

                  <nav className="flex flex-col gap-4 px-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <a
                          href={link.href}
                          className="text-lg text-gray-700 hover:text-[#070750] font-medium transition-colors py-2"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Optional: user button inside mobile menu */}
                  <div className="px-4 sm:hidden">
                    <Button variant="outline" className="w-full rounded-xl border-gray-300">
                      <CircleUser className="h-5 w-5 text-[#070750] mr-2" />
                      <span className="text-[#070750] font-medium">Oluwabukunmi</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;