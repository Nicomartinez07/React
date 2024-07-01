import React, { useState, useEffect } from "react";
import { GoArrowSwitch } from "react-icons/go";

function App() {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const API_URL =
    "https://v6.exchangerate-api.com/v6/ce9d6e5234e31641f5fc2e0f/latest/";

  // Función para convertir la moneda
  const handleConvert = () => {
    fetch(`${API_URL}${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.conversion_rates[toCurrency];
        const result = (amount * rate).toFixed(2);
        setConvertedAmount(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Función para manejar el cambio de monto
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Función para manejar el cambio de moneda de origen
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  // Función para manejar el cambio de moneda de destino
  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  // Cargar las tasas de cambio iniciales y convertir automáticamente usando useEffect
  useEffect(() => {
    fetch(API_URL + fromCurrency)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.conversion_rates);
        const rate = data.conversion_rates[toCurrency];
        const result = (amount * rate).toFixed(2);
        setConvertedAmount(result);
      })
      .catch((error) => console.error("Error fetching initial data:", error));
  }, [fromCurrency, toCurrency, amount]); // Dependencias: fromCurrency, toCurrency y amount

  return (
    <div>
      <h1>Conversor</h1>
      <div>
        <p>
          Cantidad:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </p>
      </div>
      <div className="grilla">
        <div className="card">
          <p className="card-info">
            Desde: {amount}
            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
              {exchangeRates &&
                Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </p>
        </div>
        <GoArrowSwitch />
        <div className="card">
          <p className="card-info">
            Hacia: {convertedAmount}
            <select value={toCurrency} onChange={handleToCurrencyChange}>
              {exchangeRates &&
                Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </p>
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default App;
