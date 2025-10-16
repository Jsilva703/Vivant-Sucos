import React, { useState, useMemo } from "react";
import {
  WHATSAPP_PHONE_NUMBER,
  PRICE_500ML,
  PRICE_1L,
  PIX_KEY,
  PIX_KEY_TYPE,
  MERCADO_PAGO_LINK,
} from "../constants";

const WhatsappIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-3"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.097l-1.117 4.082 4.162-1.085z" />
  </svg>
);

const CreditCardIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

interface QuantitySelectorProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onDecrement,
  onIncrement,
}) => (
  <div className="flex items-center justify-center border border-gray-300 rounded-full">
    <button
      onClick={onDecrement}
      className="px-4 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-l-full transition-colors"
    >
      -
    </button>
    <span className="px-5 py-2 text-lg font-semibold text-gray-800 tabular-nums">
      {quantity}
    </span>
    <button
      onClick={onIncrement}
      className="px-4 py-2 text-lg font-bold text-gray-600 hover:bg-gray-100 rounded-r-full transition-colors"
    >
      +
    </button>
  </div>
);

const Order: React.FC = () => {
  const [quantity500ml, setQuantity500ml] = useState(0);
  const [quantity1L, setQuantity1L] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const total = quantity500ml * PRICE_500ML + quantity1L * PRICE_1L;
  const isOrderEmpty = total === 0;

  const whatsappLink = useMemo(() => {
    let message = "Olá, Vivant! Gostaria de confirmar meu pedido:\n\n";
    if (quantity500ml > 0) {
      message += `- Garrafa 500ml: ${quantity500ml}\n`;
    }
    if (quantity1L > 0) {
      message += `- Garrafa 1L: ${quantity1L}\n`;
    }
    message += `\nTotal: R$ ${total.toFixed(2).replace(".", ",")}\n\n`;
    message += "Estou enviando o comprovante de pagamento em anexo.";

    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [quantity500ml, quantity1L, total]);

  const handleDecrement500ml = () =>
    setQuantity500ml((q) => Math.max(0, q - 1));
  const handleIncrement500ml = () => setQuantity500ml((q) => q + 1);

  const handleDecrement1L = () => setQuantity1L((q) => Math.max(0, q - 1));
  const handleIncrement1L = () => setQuantity1L((q) => q + 1);

  const handleCopyPixKey = () => {
    if (isOrderEmpty) return;
    navigator.clipboard
      .writeText(PIX_KEY)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Falha ao copiar a chave PIX: ", err);
      });
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Peça o seu Vivant.
        </h2>
        <p className="text-xl text-gray-600 mb-16">
          Monte seu pedido de forma rápida e prática.
        </p>

        <div className="space-y-16">
          {/* Step 1: Build Order */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-green-700 text-white rounded-full font-bold text-xl mr-4">
                1
              </span>
              <h3 className="text-2xl font-semibold">Monte o seu Pedido</h3>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200/80 max-w-2xl mx-auto">
              <div className="space-y-6">
                {/* 500ml Selector */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="text-left mb-4 sm:mb-0">
                    <p className="text-xl font-semibold text-gray-800">
                      Garrafa 500ml
                    </p>
                    <p className="text-gray-600">
                      R$ {PRICE_500ML.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <QuantitySelector
                    quantity={quantity500ml}
                    onDecrement={handleDecrement500ml}
                    onIncrement={handleIncrement500ml}
                  />
                </div>
                <hr />
                {/* 1L Selector */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="text-left mb-4 sm:mb-0">
                    <p className="text-xl font-semibold text-gray-800">
                      Garrafa 1L
                    </p>
                    <p className="text-gray-600">
                      R$ {PRICE_1L.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <QuantitySelector
                    quantity={quantity1L}
                    onDecrement={handleDecrement1L}
                    onIncrement={handleIncrement1L}
                  />
                </div>
              </div>
              {/* Total Display */}
              <div className="mt-8 pt-6 border-t-2 border-dashed">
                <p className="text-xl text-gray-600 mb-2">Total do Pedido:</p>
                <p className="text-5xl font-bold text-green-800">
                  R$ {total.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Pay */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-green-700 text-white rounded-full font-bold text-xl mr-4">
                2
              </span>
              <h3 className="text-2xl font-semibold">Efetue o Pagamento</h3>
            </div>
            <div
              className={`bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200/80 max-w-2xl mx-auto transition-opacity duration-300 ${isOrderEmpty ? "opacity-50" : ""}`}
            >
              <p className="text-gray-600 mb-4">
                Para finalizar, faça um PIX no valor total do seu pedido:
              </p>
              <p className="text-5xl font-bold text-green-800 mb-8">
                R$ {total.toFixed(2).replace(".", ",")}
              </p>

              <div className="flex flex-col items-center max-w-sm mx-auto">
                <p className="font-semibold text-gray-800 mb-2">
                  Use nossa chave PIX:
                </p>
                <div className="bg-white border border-gray-300 rounded-lg p-3 flex justify-between items-center w-full mb-2">
                  <span
                    className="text-gray-700 font-mono text-sm truncate"
                    id="pix-key"
                  >
                    {PIX_KEY}
                  </span>
                  <button
                    onClick={handleCopyPixKey}
                    disabled={isOrderEmpty}
                    className="ml-4 flex-shrink-0 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-bold py-1 px-3 rounded-md text-sm transition-colors"
                  >
                    {isCopied ? "Copiado!" : "Copiar"}
                  </button>
                </div>
                <p className="text-xs text-gray-500 self-start">
                  Tipo: {PIX_KEY_TYPE}
                </p>
              </div>

              <div className="my-8 flex items-center justify-center">
                <div className="w-full border-t border-gray-300"></div>
                <span className="flex-shrink-0 px-4 text-sm text-gray-500 bg-gray-50">
                  OU
                </span>
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <div className="flex flex-col items-center">
                <p className="font-semibold text-gray-800 mb-4">
                  Pague com outras opções:
                </p>
                <a
                  href={isOrderEmpty ? "#" : MERCADO_PAGO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center bg-[#00A6FF] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${isOrderEmpty ? "opacity-50 cursor-not-allowed" : "hover:bg-[#0095E6]"}`}
                  onClick={(e) => isOrderEmpty && e.preventDefault()}
                  aria-disabled={isOrderEmpty}
                >
                  <CreditCardIcon />
                  Pagar com Mercado Pago
                </a>
                <p className="text-xs text-gray-500 mt-2 max-w-xs">
                  Você será redirecionado. O valor deverá ser inserido
                  manualmente.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Send Confirmation */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-green-700 text-white rounded-full font-bold text-xl mr-4">
                3
              </span>
              <h3 className="text-2xl font-semibold">Confirme seu Pedido</h3>
            </div>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Após o pagamento, clique no botão abaixo para nos enviar o
              comprovante no WhatsApp. Assim, combinamos a entrega e a escolha
              dos sabores!
            </p>
            <div className="flex justify-center">
              <a
                href={isOrderEmpty ? "#" : whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${isOrderEmpty ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"}`}
                onClick={(e) => isOrderEmpty && e.preventDefault()}
                aria-disabled={isOrderEmpty}
              >
                <WhatsappIcon />
                ENVIAR COMPROVANTE
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Estamos aguardando seu contato!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
