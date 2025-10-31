
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const pages: Page[] = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className="bg-sidebarBg/80 backdrop-blur-lg rounded-full border border-borderColor p-1 z-10 fixed bottom-4 inset-x-4 max-w-md mx-auto lg:relative lg:sticky lg:top-6 lg:inset-auto lg:max-w-none lg:rounded-2xl">
      <ul className="flex items-center justify-around lg:justify-end">
        {pages.map(page => (
          <li key={page}>
            <button
              onClick={() => setActivePage(page)}
              className={`text-sm font-medium px-3 py-2 rounded-full transition-colors duration-300 ${
                activePage === page 
                ? 'text-bgColor bg-accent' 
                : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;