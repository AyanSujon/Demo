
import FellowshipFilters from '@/components/fellowship/FellowshipFilters';
import Navbar from '@/components/fellowship/Navbar';
import ResourceBanner from '@/components/fellowship/ResourceBanner';
import RhodesScholar from '@/components/fellowship/RhodesScholar';
import SuccessStories from '@/components/fellowship/SuccessStories';


const Fellowships = () => {
    return (
        <div>
        
        <div className='container mx-auto px-2'>
            <Navbar/> {/* Post-Login Navbar */}

            <FellowshipFilters/>
            <SuccessStories/>
            <RhodesScholar/>
            <ResourceBanner/>
        </div>
        
        </div>
    );
};

export default Fellowships;

