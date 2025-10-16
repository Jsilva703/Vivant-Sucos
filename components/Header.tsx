import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
  onFlavorsClick: () => void;
  onOrderClick: () => void;
}

const Logo: React.FC<{className?: string}> = ({ className }) => (
    <svg 
      className={className} 
      viewBox="0 0 160 40" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vivant Logo"
    >
      <text 
        x="10" 
        y="30" 
        fontFamily="'Poppins', sans-serif"
        fontSize="30"
        fontWeight="600" 
        fill="currentColor"
      >
        Vivant
      </text>
    </svg>
);


const Header: React.FC<HeaderProps> = ({ isScrolled, onFlavorsClick, onOrderClick }) => {
  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
  }`;
  
  const navLinkClasses = `cursor-pointer font-medium tracking-wide transition-colors duration-300 ${
    isScrolled ? 'text-gray-700 hover:text-green-800' : 'text-white hover:text-gray-200'
  }`;
  
  const logoClasses = `h-10 transition-colors duration-300 ${
    isScrolled ? 'text-gray-800' : 'text-white'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className={logoClasses} />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={onFlavorsClick} className={navLinkClasses}>
            Sabores
          </button>
          <button onClick={onOrderClick} className={navLinkClasses}>
            Pedir Agora
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;