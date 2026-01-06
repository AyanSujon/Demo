

'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import SuccessStoriesCard from './SuccessStoriesCard';

const SuccessStories = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const successStoriesData = [
    {
      rating: 4,
      testimonial:
        "My mentor guided me through the US college application process and helped me build a strong STEM portfolio. Today, I'm studying at my dream university.",
      name: "Raj Patel",
      origin: "India - MIT",
      achievement: "Accepted into MIT Computer Science",
      journey_time: "10 months",
    },
    {
      rating: 5,
      testimonial:
        "With dedicated guidance, I navigated the challenging applications and developed an outstanding research portfolio in physics. Now, I'm thriving at MIT.",
      name: "Li Wei",
      origin: "China - MIT",
      achievement: "Accepted into MIT Physics",
      journey_time: "7 months",
    },
    {
      rating: 4,
      testimonial:
        "My advisor helped me refine my essays and strengthen my STEM extracurriculars for top US schools. I'm now pursuing aerospace engineering at my top choice.",
      name: "Sofia Ramirez",
      origin: "Mexico - MIT",
      achievement: "Accepted into MIT Aeronautics and Astronautics",
      journey_time: "9 months",
    },
    {
      rating: 5,
      testimonial:
        "The mentorship was invaluable in building my biology research profile and preparing for interviews. Today, I'm living my dream at MIT.",
      name: "Aisha Khan",
      origin: "Pakistan - MIT",
      achievement: "Accepted into MIT Biology",
      journey_time: "11 months",
    },
    {
      rating: 4,
      testimonial:
        "Thanks to expert guidance on applications and portfolio development, I overcame the odds as an international applicant. Now studying electrical engineering at MIT.",
      name: "Kim Ji-hoon",
      origin: "South Korea - MIT",
      achievement: "Accepted into MIT Computer Science",
      journey_time: "6 months",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className='mt-20'>
      <div className="text-center">
        <h3 className="text-4xl font-bold text-[#333333] mb-3">
          Success Stories
        </h3>
        <p className="text-lg text-[#767676] max-w-2xl mx-auto">
          Hear from students who transformed their dreams into reality
        </p>
      </div>
      <div className="py-12 px-4">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {successStoriesData.map((successStory, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 transition-all duration-300"
              >
                <div className="p-1">
                  <div className="scale-95 transition-transform duration-300 data-[state=active]:scale-105 data-[state=active]:shadow-xl">
                    <SuccessStoriesCard successStory={successStory} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />

          {/* Custom pagination dots with active color #8A38F5 */}
          <div className="flex justify-center mt-8 gap-2">
            {successStoriesData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    current === index ? '#8A38F5' : '#e5e7eb', // gray-200 for inactive
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SuccessStories;