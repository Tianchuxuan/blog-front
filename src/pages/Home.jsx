import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import PageContainer from '../components/PageContainer';

export default function Home() {
  return (
    <PageWrapper>
      <PageContainer variant="narrow" className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-lime-600 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 border border-rose-100 text-neutral-700 leading-relaxed">
          <p>
            I am a goal-driven full-stack developer. My work centers on understanding problems and leveraging the most suitable technology stack to build effective solutions. I firmly believe that the ultimate purpose of technology is to serve people, which is why I place strong emphasis on application usability and performance. I strive to ensure that the final product not only meets requirements but also delivers a delightful user experience. If you have an idea waiting to be brought to life, feel free to explore my projects or get in touch directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            to="/projects" 
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:via-pink-600 hover:to-rose-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore My Projects
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-6 md:px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-neutral-300 hover:text-rose-700 hover:border-rose-300"
          >
            Get In Touch
            <ArrowRight size={20} className="transition-transform" />
          </Link>
        </div>
      </PageContainer>
    </PageWrapper>
  );
}
