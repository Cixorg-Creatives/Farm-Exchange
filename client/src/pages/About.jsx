import React from 'react';
import Weekend from '@/components/about/Weekend';
import ProjectHighlight from '@/components/about/ProjectHighlight';
import Hero from '@/components/about/Hero';
import Vision from '@/components/about/Vision';

const About = () => {
  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <Hero />
      <Weekend />
      <ProjectHighlight />
      <Vision />
    </div>
  );
};

export default About;
