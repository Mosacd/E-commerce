import { useContext } from "react";
import { CurrencyContext } from "../";

export const useCurrencyContext = () => {
  const currencyContext = useContext(CurrencyContext);

  if (!currencyContext) {
    throw new Error("useCurrencycontext must be used within a CurrencyProvider");
  }

  return currencyContext;
};
