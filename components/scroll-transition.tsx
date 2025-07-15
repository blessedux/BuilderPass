'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('[data-section="section2"]');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black overflow-hidden'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      {/* Spline 3D Scene - Full Width */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full"
          style={{ 
            transform: 'scale(1.2)',
            transformOrigin: 'center center'
          }}
        >
          <iframe 
            src='https://my.spline.design/connectingcard-4A1wCrF0FIIrcLxZwn3Qn4Ay/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full"
            style={{
              pointerEvents: 'auto'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Left Third - Scrollable Area Overlay */}
      <div className="absolute left-0 top-0 w-1/3 h-full z-20">
        {/* This area is naturally scrollable and overlays the Spline scene */}
      </div>

      {/* Scroll Down Button */}
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={scrollToNextSection}
          className="group text-white hover:text-gray-300 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      data-section="section2"
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <article className='container mx-auto relative z-10 '>
        <h1 className='text-6xl leading-[100%] py-10 font-semibold  tracking-tight '>
          Images That doesn't Make any sense <br /> but still in this section
        </h1>
        <div className='grid grid-cols-4 gap-4'>
          <img
            src='https://images.unsplash.com/photo-1717893777838-4e222311630b?w=1200&auto=format&fit=crop'
            alt='img'
            className=' object-cover w-full rounded-md h-full'
          />
          <img
            src='https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=500&auto=format&fit=crop'
            alt='img'
            className=' object-cover w-full rounded-md'
          />
          <img
            src='https://images.unsplash.com/photo-1717588604557-55b2888f59a6?w=500&auto=format&fit=crop'
            alt='img'
            className=' object-cover w-full rounded-md h-full'
          />
          <img
            src='https://images.unsplash.com/photo-1713417338603-1b6b72fcade2?w=500&auto=format&fit=crop'
            alt='img'
            className=' object-cover w-full rounded-md h-full'
          />
        </div>
      </article>
    </motion.section>
  );
};

const ScrollTransition = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200vh] bg-black'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <footer className='group bg-[#06060e] '>
          <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </>
  );
});

ScrollTransition.displayName = 'ScrollTransition';

export default ScrollTransition; 