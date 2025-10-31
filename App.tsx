import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('About');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <main className="relative flex flex-col lg:flex-row min-h-screen p-2 sm:p-4 lg:p-6 gap-4">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="flex-1 mt-40 lg:mt-0 lg:ml-[22rem] lg:max-w-[calc(100%-24rem)]">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <div className="bg-contentBg p-6 sm:p-8 rounded-2xl border border-borderColor mt-6 mb-20 md:mb-20 lg:mb-0">
          {renderPage()}
        </div>
      </div>
    </main>
  );
};

export default App;