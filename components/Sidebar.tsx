import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, MailIcon, PhoneIcon, LocationIcon, ChevronDownIcon, SunIcon, MoonIcon } from '../constants.tsx';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mobileView = window.innerWidth < 1024;
      setIsScrolled(mobileView && window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  const contactInfo = [
    { icon: <MailIcon />, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: <PhoneIcon />, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: <LocationIcon />, label: 'Location', value: PERSONAL_INFO.location },
  ];

  const isShrunken = isScrolled && !isOpen;

  return (
    <aside className={`fixed z-20 transition-all duration-300 lg:w-[20rem] lg:h-screen lg:top-6 lg:left-6 lg:bottom-6
      ${isShrunken 
        ? 'top-4 inset-x-4 max-w-md mx-auto h-[61px] p-2' 
        : 'top-0 left-0 w-full p-6 lg:p-0'
      }`}>
      <div className={`relative transition-all duration-300 lg:h-full lg:flex lg:flex-col lg:justify-between custom-scrollbar overflow-y-auto
        ${isShrunken
          ? 'bg-sidebarBg/80 backdrop-blur-lg rounded-full border border-borderColor h-full px-4'
          : 'bg-sidebarBg/80 backdrop-blur-lg rounded-2xl border border-borderColor p-6'
        }`}>
        
        {/* Header and Toggle */}
        <div className={`flex items-center
          ${isShrunken
            ? 'justify-between h-full'
            : 'justify-between lg:flex-col lg:items-center text-center'
          }`}>
            <div className="flex items-center lg:flex-col">
                <figure className={`w-20 h-20 rounded-full overflow-hidden transition-all duration-300 ${isShrunken ? 'hidden' : 'block'}`}>
                    <img src={PERSONAL_INFO.avatarUrl} alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />
                </figure>
                <div className={`transition-all duration-300 ${isShrunken ? '' : 'ml-4 lg:ml-0 lg:mt-6'}`}>
                    <h1 className="text-2xl font-medium text-textPrimary">{PERSONAL_INFO.name}</h1>
                    <p className={`bg-contentBg text-textSecondary text-sm rounded-lg px-3 py-1 mt-2 inline-block transition-all duration-300 lg:block ${isShrunken ? 'hidden' : 'opacity-100'}`}>{PERSONAL_INFO.title}</p>
                </div>
            </div>
            
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-3 rounded-lg border transition-all duration-300 ${isShrunken ? 'border-none' : 'bg-contentBg border-borderColor'}`}
                aria-label="Toggle sidebar details"
            >
                <ChevronDownIcon isOpen={isOpen} />
            </button>
        </div>

        {/* Details and Social Links */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden 
          ${isShrunken ? 'max-h-0' : ''} 
          ${isOpen ? 'max-h-screen mt-6 pb-4' : 'max-h-0'} 
          lg:max-h-full lg:mt-0`}>
          <div className="border-t border-borderColor my-6"></div>
          
          <ul className="space-y-4">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center">
                <div className="bg-contentBg p-3 rounded-lg shadow-sm border border-borderColor">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <p className="text-xs text-textSecondary">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-textPrimary break-all hover:text-accent transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-textPrimary break-all">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <div className="flex justify-center items-center gap-3 flex-wrap">
              {SOCIAL_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-accent transition-opacity duration-300 hover:opacity-75 w-6 h-6 flex items-center justify-center"
                >
                  {link.icon}
                </a>
              ))}
            </div>
             <button onClick={toggleTheme} className="bg-contentBg p-2 rounded-full border border-borderColor" aria-label="Toggle Theme">
              {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;