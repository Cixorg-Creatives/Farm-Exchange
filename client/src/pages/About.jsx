import React from 'react';
import Weekend from '@/components/about/Weekend';
import ProjectHighlight from '@/components/about/ProjectHighlight';
import Hero from '@/components/about/Hero';
import Vision from '@/components/about/Vision';
import Benefits from '@/components/about/Benefits';
import Difference from '@/components/about/Difference';

const About = () => {
  return (
    <div className='px-4 md:px-6 lg:px-24 overflow-x-hidden'>
      <Hero />
      {/* <Weekend /> */}
      {/* <ProjectHighlight /> */}
      <Vision />      
      <Difference />
      <Benefits />
    </div>
  );
};

export default About;
