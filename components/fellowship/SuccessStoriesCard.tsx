import React from 'react';
import { Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Separator } from "@/components/ui/separator"

interface SuccessStory {
    rating: number;
    testimonial: string;
    name: string;
    origin: string;
    achievement: string;
    journey_time: string;
}

interface SuccessStoriesCardProps {
    successStory: SuccessStory;
}

const SuccessStoriesCard: React.FC<SuccessStoriesCardProps> = ({ successStory }) => {
    const { rating, testimonial, name, origin, achievement, journey_time } = successStory;

    return (
        <div className="bg-white shadow-accent rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6 ">
                <div className="flex items-center gap-1 mb-6 bg-gray-100 p-2 rounded-2xl">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={20}
                            className={i < rating ? 'fill-[#070750] text-[#070750]' : 'text-gray-300'}
                        />
                    ))}
                </div>
            </div>

            {/* Testimonial */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
                "{testimonial}"
            </p>

            {/* Student Info */}
            <div>
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-gray-600 text-sm mb-4">{origin}</p>

                {/* Achievement Badge */}
                <div className=" mb-6">

                    <Badge className=" bg-[#070750] text-white font-medium">{achievement}</Badge>
                </div>

                 <Separator className="my-4" />

                {/* Journey Time */}
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Journey time:</span>
                    <span className="font-semibold text-[#070750]">{journey_time}</span>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesCard;


