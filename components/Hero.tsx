import React from 'react';

interface HeroProps {
  onDiscoverClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDiscoverClick }) => {
  return (
    <header className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      >
        <source src="https://mkdocs-201908.s3.sa-east-1.amazonaws.com:443/1624/production/0129adeab6ef61c46167fdba207db685_1624/production/GeneratedFileOctober162025-12_19PM_1760631484362.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 text-center px-4">
        <p className="text-5xl md:text-7xl font-light mb-4 tracking-wider">Vitalidade em cada gota.</p>
        <p className="text-xl md:text-2xl font-extralight max-w-2xl mx-auto mb-8">
          Sucos 100% naturais, prensados com carinho para energizar o seu dia.
        </p>
        <button
          onClick={onDiscoverClick}
          className="bg-transparent border border-white text-white font-semibold py-3 px-10 rounded-full hover:bg-white hover:text-green-800 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Descobrir os Sabores
        </button>
      </div>
    </header>
  );
};

export default Hero;