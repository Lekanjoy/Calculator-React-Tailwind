import './App.css';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  // Delete Number
  const deleteValue = () => {
    try {
      setValue(value.slice(0, -1))

    } catch (error) {
      setValue('')
    }

  };

  // Clear Screen
  const clearScreen = () => {
    setValue('')
  };

  // Calculation Function
  const calculate = () => {
    try {
      setValue(eval(value))
    } catch (error) {
      setValue('Error!')
    }

  }


  return (
    <section className="w-80 bg-white shadow-lg rounded-xl font-semibold text-blue-500 mx-auto my-12 border p-3">
      <h1 className="text-center text-lg tracking-widest">CALCULATOR</h1>
      <input
        type="text"
        placeholder='0'
        value={value}
        className="screen w-full h-12 shadow-md border border-blue-200 mt-2 mb-7 rounded-md text-right px-2 text-lg "
      />
      <div className="w-full grid grid-cols-4 gap-x-3 gap-y-5 place-items-center text-center">
        <button value="1" onClick={(e) => setValue(value + e.target.value)} className="button">1</button>
        <button value="2" onClick={(e) => setValue(value + e.target.value)} className="button">2</button>
        <button value="3" onClick={(e) => setValue(value + e.target.value)} className="button">3</button>
        <button value="ce" onClick={deleteValue} className="button">CE</button>
        <button value="4" onClick={(e) => setValue(value + e.target.value)} className="button">4</button>
        <button value="5" onClick={(e) => setValue(value + e.target.value)} className="button">5</button>
        <button value="6" onClick={(e) => setValue(value + e.target.value)} className="button">6</button>
        <button value="+" onClick={(e) => setValue(value + e.target.value)} className="button">+</button>
        <button value="7" onClick={(e) => setValue(value + e.target.value)} className="button">7</button>
        <button value="8" onClick={(e) => setValue(value + e.target.value)} className="button">8</button>
        <button value="9" onClick={(e) => setValue(value + e.target.value)} className="button">9</button>
        <button value="*" onClick={(e) => setValue(value + e.target.value)} className="button">*</button>
        <button value="." onClick={(e) => setValue(value + e.target.value)} className="button">.</button>
        <button value="0" onClick={(e) => setValue(value + e.target.value)} className="button">0</button>
        <button value="=" onClick={calculate} className="button">=</button>
        <button value="/" onClick={(e) => setValue(value + e.target.value)} className="button">/</button>
      </div>
    </section>
  );
}
