import React from 'react';
import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import ScrollImageSection from './components/ScrollImageSection'; // ✅ updated name here
import ImageSection from './components/ImageSection';
import Image from './components/Image';
import { Skills } from './components/Skills';
import ServicesSection from './components/ServicesSection';


const Page = () => {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <ScrollImageSection/> 
      <ImageSection/>
      <Image/>
      <Skills/>
      <ServicesSection/>
    </div>
  );
};

export default Page;
