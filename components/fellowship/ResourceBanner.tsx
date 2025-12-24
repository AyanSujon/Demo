import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const ResourceBanner = () => {
    return (
        <div>
            <div className="w-full max-w-5xl mx-auto px-4 py-20">
                <div className="rounded-lg bg-[#070750] px-8 py-16 flex flex-col items-center justify-center text-center gap-6">
                    <h2 className="text-3xl font-semibold text-white">
                        Get the best of our resources
                    </h2>
                    <Button variant="secondary" size="lg" className="group">
                        Find A Mentor
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResourceBanner;