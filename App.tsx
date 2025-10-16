import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Flavors from './components/Flavors';
import Order from './components/Order';
import Commitment from './components/Commitment';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const flavorsRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#FDFCFB] text-gray-800 antialiased">
      <Header
        isScrolled={isScrolled}
        onFlavorsClick={() => handleScrollTo(flavorsRef)}
        onOrderClick={() => handleScrollTo(orderRef)}
      />
      <Hero onDiscoverClick={() => handleScrollTo(flavorsRef)} />
      <main>
        <div ref={flavorsRef} className="scroll-mt-4">
          <Flavors />
        </div>
        <div ref={orderRef} className="scroll-mt-4">
          <Order />
        </div>
      </main>
      <Commitment />
    </div>
  );
};

export default App;