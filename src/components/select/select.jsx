import { useState, useRef, useEffect } from "react";
import styles from "./select.module.css";
import { useCurrencyContext } from "../../context/currency/hooks/useCurrencyContext";

const Select = () => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const { currency, setCurrency } = useCurrencyContext();

  const options = [
    { symbol: "$", code: "USD" },
    { symbol: "€", code: "EUR" },
    { symbol: "¥", code: "JPY" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.selectContainer} ref={selectRef}>
      <div className={styles.trigger} onClick={() => setOpen(!open)}>
        <span>{options.find(o => o.code === currency)?.symbol}</span>
        <div className={open ? styles.arrowUp : styles.arrowDown}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
      </div>

      {open && (
        <div className={styles.dropdown}>
          {options.map(({ symbol, code }) => (
            <div
              key={code}
              className={`${styles.option} ${currency === code ? styles.active : ""}`}
              onClick={() => {
                setCurrency(code);
                setOpen(false);
              }}
            >
              {symbol} {code}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
