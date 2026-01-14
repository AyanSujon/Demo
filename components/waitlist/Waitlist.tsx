

import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Waitlist = () => {
    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden font-sans">
            {/* Main Content Area */}
            <div className="flex flex-col items-center justify-center text-center pt-10 pb-32 px-4 max-w-4xl mx-auto relative z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#0707500D] border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                    <Globe className="w-4 h-4 text-[#2E476B]" />
                    <span className="text-sm font-medium text-[#2E476B]">Connecting Dreams Globally</span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#333] tracking-tight leading-tight mb-6">
                    Dream Big, Connect Globally, <br />
                    <span className="text-[#4A90E2]">Achieve More</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg text-gray-500 max-w-2xl mb-5">
                    At GDC, we connect ambitious teenagers with mentors and professors
                    from the very universities they dream of attending.
                </p>

                {/* Waitlist Form Card */}
                <div className="w-full max-w-md bg-[#07075005]/5% p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                    <div className="text-left space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className="h-12 border-[#333333] focus-visible:ring-[#333333]"
                            />
                        </div>
                        <Button className="w-full h-12 bg-[#070750] hover:bg-[#070750]/90 text-white font-semibold text-base">
                            Join our waitlist
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Character Images */}
            {/* Left Character */}
            <div className="hidden lg:block absolute bottom-0 left-0 w-[350px] z-0">
                <Image
                    src="/images/student-left.png" 
                    alt="Student with yellow hoodie"
                    width={400}
                    height={600}
                    className="object-contain object-bottom"
                />
            </div>

            {/* Right Character */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-[500px] z-0">
                <Image
                    src="/images/student-right.png"
                    alt="Student with pink notebook"
                    width={700}
                    height={600}
                    className="object-contain object-bottom"
                />
            </div>
        </section>
    );
};

export default Waitlist;