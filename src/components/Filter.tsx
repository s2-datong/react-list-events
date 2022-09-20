import React, { FormEvent, useState } from "react"
import { useFilter } from "../hooks/useFilter";
import "../css/filter.css"

export const Filter: React.FC = () => {
  const [cityFilter, setCityFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<number>(0);

  useFilter(cityFilter, priceFilter)

  const handleCityFilterInput = (e: FormEvent<HTMLInputElement>) => {
    setCityFilter(e.currentTarget.value)
  }
  const handlePriceFilterInput = (e: FormEvent<HTMLInputElement>) => {
    const price = Number(e.currentTarget.value)
    if(!Number.isNaN(price)) setPriceFilter(price)
    
  }

  return <div className="flex-div">
    <input type="text" value={cityFilter} onInput={handleCityFilterInput} />
    <input type="text" value={priceFilter} onInput={handlePriceFilterInput} />
    <button onClick={() => null}>Filter Result</button>
  </div>
}