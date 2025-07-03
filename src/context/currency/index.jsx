import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const exchangeRates = {
  USD: 1,
  EUR: 0.91,
  JPY: 155,
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  const convert = (priceUSD) => {
    return priceUSD * exchangeRates[currency];
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
};

