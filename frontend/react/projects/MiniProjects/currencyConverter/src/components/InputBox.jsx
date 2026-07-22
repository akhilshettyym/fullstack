"use client"

import { useId } from "react"

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Use ID hook for unique value
  const amountInputId = useId()

  return (
    <div className={`bg-white/90 p-4 rounded-lg text-sm flex shadow-md ${className}`}>
      <div className="w-1/2">
        {/* labels */}
        <label htmlFor={amountInputId} className="text-black/80 font-medium mb-2 inline-block">
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-black font-medium"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount || ""}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/80 font-medium mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1.5 bg-gray-100 cursor-pointer outline-none text-black font-medium border border-gray-300"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox;