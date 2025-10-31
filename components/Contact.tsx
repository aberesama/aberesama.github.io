import React from 'react';
import { SendIcon } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-textPrimary relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px] rounded-sm">Contact</h2>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-textPrimary mb-6">Contact Form</h3>
        
        <form action="#" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full name" required className="w-full bg-sidebarBg text-textPrimary p-4 rounded-lg border border-borderColor focus:border-accent outline-none transition-colors" />
            <input type="email" placeholder="Email address" required className="w-full bg-sidebarBg text-textPrimary p-4 rounded-lg border border-borderColor focus:border-accent outline-none transition-colors" />
          </div>
          <div>
            <textarea placeholder="Your message" rows={6} required className="w-full bg-sidebarBg text-textPrimary p-4 rounded-lg border border-borderColor focus:border-accent outline-none transition-colors resize-none"></textarea>
          </div>
          <div>
            <button type="submit" className="inline-flex items-center bg-accent text-bgColor font-semibold py-3 px-6 rounded-lg hover:bg-accentHover transition-colors">
              Send Message <SendIcon/>
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-textPrimary mb-6">Find Me on the Map</h3>
        <div className="w-full h-80 rounded-lg overflow-hidden border-2 border-borderColor">
          <iframe
            title="Nairobi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585374823!2d36.68257929942079!3d-1.3028602798634836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1679840251842!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;