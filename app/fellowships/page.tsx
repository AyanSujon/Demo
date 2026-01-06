
import FellowshipFilters from '@/components/fellowship/FellowshipFilters';
import ResourceBanner from '@/components/fellowship/ResourceBanner';
import RhodesScholar from '@/components/fellowship/RhodesScholar';
import SuccessStories from '@/components/fellowship/SuccessStories';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Fellowships = () => {
    return (
        <div>
        <Header/>
        <div className='container mx-auto px-2'>
            <FellowshipFilters/>
            <SuccessStories/>
            <RhodesScholar/>
            <ResourceBanner/>
        </div>
        <Footer/>
        </div>
    );
};

export default Fellowships;

