import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlayCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';


const RhodesScholar: React.FC = () => {
  return (
    <div className=" py-20 overflow-hidden bg-white ">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="/images/How I became a Rhodes Scholar.png"
            alt="Rhodes Scholar student studying"
            fill
            className=" object-cover md:object-contain object-top px-5"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How I became a Rhodes Scholar?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Get a taste of what SDC has to offer with our free resources,
            designed to help you on your college application journey.
          </p>

          {/* Author */}
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-[#070750] flex items-center justify-center text-white font-semibold text-sm">
              <p className='text-2xl'>G</p>
            </div>
            <span className="ml-3 text-gray-700 font-medium">Ahmad Patel</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button  className="group bg-[#070750] hover:bg-[#070750]">
              Read Full Article
              <ArrowRight className="ml-2 h-4 w-4 " />
            </Button>
            <Button variant="outline" className=" text-[#070750] border  border-[#070750] transition-transform group-hover:translate-x-1">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhodesScholar;