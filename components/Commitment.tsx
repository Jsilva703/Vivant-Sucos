import React from 'react';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';

const InstagramIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const WhatsappIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.097l-1.117 4.082 4.162-1.085z" />
    </svg>
);

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


const Commitment: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-200 text-[10rem] md:text-[14rem] font-bold opacity-50 select-none z-0 pointer-events-none">
                Vivant
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <Logo className="h-12 text-gray-700 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Nossa Essência</h3>
                <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
                    Vivant é mais que um suco, é um ritual de bem-estar. Nosso compromisso é com a pureza e o frescor. Selecionamos as melhores frutas para garantir um produto sem conservantes, sem adição de açúcar e cheio de vida. É a natureza na sua forma mais pura, feita para você.
                </p>
                <div className="flex justify-center items-center space-x-6">
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-800 transition-colors duration-300 p-2">
                        <InstagramIcon className="h-7 w-7"/>
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-800 transition-colors duration-300 p-2">
                        <WhatsappIcon className="h-7 w-7"/>
                         <span className="sr-only">WhatsApp</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Commitment;