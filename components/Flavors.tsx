import React from 'react';
import { FLAVORS, FLAVORS_IMAGE_URL } from '../constants';

const LeafIcon: React.FC = () => (
    <svg className="w-6 h-6 text-green-700 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ThermometerIcon: React.FC = () => (
    <svg className="w-8 h-8 text-green-700 mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
);

const SnowflakeIcon: React.FC = () => (
  <svg className="w-8 h-8 text-green-700 mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2v20M20 12l-4.5-4.5M6.5 7.5L2 12l4.5 4.5M20 12l-4.5 4.5M6.5 16.5L2 12M12 2l4.5 4.5M7.5 6.5L12 2l4.5 4.5M12 22l-4.5-4.5M16.5 17.5L12 22l-4.5-4.5" />
  </svg>
);


const Flavors: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FDFCFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Nossos Sabores</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="w-full">
            <img 
              src={FLAVORS_IMAGE_URL} 
              alt="Garrafas dos sucos Vivant Laranja, Abacaxi com Hortelã e Manga com Laranja" 
              className="w-full h-auto object-cover rounded-xl shadow-2xl aspect-[4/5]" 
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            {FLAVORS.map((flavor, index) => (
              <div key={index} className="flex items-start">
                <LeafIcon />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{flavor.name}</h3>
                  <p className="text-lg text-gray-600 italic">{flavor.slogan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conservation Info Section */}
        <div className="mt-20 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Dicas de Conservação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* Refrigerated */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/80 text-center">
                <ThermometerIcon />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Refrigerado (Fresco)</h4>
                <p className="text-gray-600 leading-relaxed">
                    Consumir em até <strong>3 dias</strong>, mantido em geladeira (abaixo de 5°C).
                </p>
            </div>
            
            {/* Frozen */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200/80 text-center">
                <SnowflakeIcon />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Congelado</h4>
                <p className="text-gray-600 leading-relaxed">
                    Válido por até <strong>3 meses</strong> no freezer.
                </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavors;