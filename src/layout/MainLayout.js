import NavigateTop from '@/components/floating/navigateTop'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import Hero from '@/pages/hero/Hero'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'



export default function MainLayout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection?.offsetHeight || 0;
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col">
      {/* <NavbarNavigation/> */}
      <section className='h-screen relative' id="hero">
        <Hero/>
        <div className="absolute top-0 left-0 z-1 h-full w-full">
            <HeroHighlight/>
        </div>
      </section>

      <section className='bg-orange-400 h-screen' id="experience">
        Experiences
      </section> 

      <section className='bg-orange-500 h-screen' id="projects">
        Projects
      </section>

      <section className='bg-orange-600 h-screen' id="stack">
        Tech stack
      </section>

      <section className='bg-orange-700 h-screen' id="contact">
        Lets build together
      </section>

      <Outlet/> 

      {isVisible && <NavigateTop/>}
    </div>
  )
}
