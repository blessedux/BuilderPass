'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef, forwardRef } from 'react';
import { ChevronDown, Users, Trophy, Zap, Globe, Shield, Rocket } from 'lucide-react';

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
      className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white overflow-hidden'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      
      <article className='container mx-auto relative z-10 px-8 py-20'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl leading-[100%] font-bold tracking-tight mb-6'>
            The Ultimate Platform for <br />
            <span className='bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent'>
              Web3 Builders
            </span>
          </h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-12'>
            Discover hackathons, form dream teams, showcase your credentials, and turn your ideas into funded startups.
          </p>
          
          {/* Visual Showcase Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16'>
            <img
              src='https://images.unsplash.com/photo-1717893777838-4e222311630b?w=1200&auto=format&fit=crop'
              alt='Web3 Development'
              className='object-cover w-full rounded-lg h-48 md:h-64 shadow-lg hover:scale-105 transition-transform duration-300'
            />
            <img
              src='https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=500&auto=format&fit=crop'
              alt='Team Collaboration'
              className='object-cover w-full rounded-lg h-48 md:h-64 shadow-lg hover:scale-105 transition-transform duration-300'
            />
            <img
              src='https://images.unsplash.com/photo-1717588604557-55b2888f59a6?w=500&auto=format&fit=crop'
              alt='Innovation Hub'
              className='object-cover w-full rounded-lg h-48 md:h-64 shadow-lg hover:scale-105 transition-transform duration-300'
            />
            <img
              src='https://images.unsplash.com/photo-1713417338603-1b6b72fcade2?w=500&auto=format&fit=crop'
              alt='Future Technology'
              className='object-cover w-full rounded-lg h-48 md:h-64 shadow-lg hover:scale-105 transition-transform duration-300'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Feature 1 */}
          <div className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4'>
                <Trophy className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-semibold'>Hackathon Discovery</h3>
            </div>
            <p className='text-gray-300'>
              Find the perfect hackathons that match your skills and interests. From beginner-friendly to expert-level challenges.
            </p>
          </div>

          {/* Feature 2 */}
          <div className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4'>
                <Users className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-semibold'>Team Formation</h3>
            </div>
            <p className='text-gray-300'>
              Connect with talented developers, designers, and entrepreneurs. Build dream teams that win together.
            </p>
          </div>

          {/* Feature 3 */}
          <div className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4'>
                <Shield className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-semibold'>Credential Showcase</h3>
            </div>
            <p className='text-gray-300'>
              Display your achievements, skills, and past projects with verifiable credentials that build trust.
            </p>
          </div>

          {/* Feature 4 */}
          <div className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4'>
                <Rocket className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-semibold'>Startup Launch</h3>
            </div>
            <p className='text-gray-300'>
              Transform your hackathon projects into funded startups with our comprehensive launch support.
            </p>
          </div>

          {/* Feature 5 */}
          <div className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4'>
                <Globe className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-semibold'>Global Network</h3>
            </div>
            <p className='text-gray-300'>
              Join a worldwide community of builders, mentors, and investors in the Web3 ecosystem.
            </p>
          </div>

          {/* Feature 6 */}
          <div className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-semibold'>Fast Track</h3>
            </div>
            <p className='text-gray-300'>
              Accelerate your Web3 journey with curated resources, mentorship, and funding opportunities.
            </p>
          </div>
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
            Builder Pass
          </h1>
          <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'>
            <p className='text-center'>
              Ready to build the future of Web3? <br />
              <span className='text-purple-400'>Join the revolution today.</span>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
});

ScrollTransition.displayName = 'ScrollTransition';

export default ScrollTransition; 