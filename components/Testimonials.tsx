import React, { useState } from 'react';
import { TESTIMONIALS, QuoteIcon } from '../constants.tsx';
import { Testimonial } from '../types.ts';
import Modal from './Modal.tsx';

// Component to display the full testimonial details inside the modal
const TestimonialDetails: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="flex flex-col items-center text-center p-4">
        <img 
            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-borderColor" 
            src={testimonial.avatarUrl} 
            alt={`${testimonial.name} avatar`} 
        />
        <h3 className="text-xl font-semibold text-textPrimary">{testimonial.name}</h3>
        <p className="text-sm text-textSecondary mb-6">{testimonial.title}</p>
        <figure className="relative max-w-2xl">
            <div className="absolute -top-4 -left-8 text-accent/10 pointer-events-none">
                <QuoteIcon />
            </div>
            <blockquote className="text-textSecondary italic text-lg z-10">
                <p>"{testimonial.quote}"</p>
            </blockquote>
            <div className="absolute -bottom-8 -right-8 text-accent/10 pointer-events-none transform scale-x-[-1]">
                <QuoteIcon />
            </div>
        </figure>
    </div>
);

const Testimonials: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-textPrimary">Testimonials</h3>
      
      {/* Grid of referees */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            onClick={() => setSelectedTestimonial(testimonial)}
            className="p-4 bg-sidebarBg rounded-xl border-2 border-borderColor transition-all duration-300 cursor-pointer hover:border-accent hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <img className="w-16 h-16 rounded-full object-cover" src={testimonial.avatarUrl} alt={`${testimonial.name} avatar`} />
              <div>
                <h4 className="font-semibold text-textPrimary">{testimonial.name}</h4>
                <p className="text-sm text-textSecondary">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected testimonial */}
      <Modal isOpen={!!selectedTestimonial} onClose={() => setSelectedTestimonial(null)} title="Testimonial">
        {selectedTestimonial && <TestimonialDetails testimonial={selectedTestimonial} />}
      </Modal>
    </div>
  );
};

export default Testimonials;