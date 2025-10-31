import React from 'react';
import { ABOUT_TEXT, SERVICES } from '../constants.tsx';
import Testimonials from './Testimonials.tsx';

const About: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-textPrimary relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px] rounded-sm">About Me</h2>
      <div className="mt-8 text-textSecondary space-y-4">
        <p>{ABOUT_TEXT.p1}</p>
        <p>{ABOUT_TEXT.p2}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-textPrimary">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex items-start p-6 bg-sidebarBg rounded-xl border border-borderColor">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-textPrimary">{service.title}</h4>
                <p className="mt-1 text-textSecondary text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </section>
  );
};

export default About;