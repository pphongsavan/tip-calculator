import './App.css';
import { useState } from "react"

import Header from './components/Header';
import Instructions from './components/Instructions';
import Amounts from './components/Amounts';
import AddAmount from './components/AddAmount';
import Button from './components/Button';

function App() {
  const startingPercents = [8, 10, 15, 20];
  const [amounts, setAmounts] = useState([
    // {
    //     id: 1,
    //     subtotal: 100,
    //     percent: 10,
    //     tipAmount: 10,
    //     total: 110,
    //     highlight: false
    // },
    // {
    //     id: 2,
    //     subtotal: 100,
    //     percent: 15,
    //     tipAmount: 15,
    //     total: 115,
    //     highlight: false
    // },
    // {
    //     id: 3,
    //     subtotal: 100,
    //     percent: 18,
    //     tipAmount: 18,
    //     total: 118,
    //     highlight: false
    // },
    // {
    //     id: 4,
    //     subtotal: 120,
    //     percent: 20,
    //     tipAmount: 20,
    //     total: 120,
    //     highlight: false
    // },
])

  // Add Amount
  const addAmount = (amount) => {
    const id = amounts.length + 1
    console.log(amount);

    // if (amounts.length === 0) {
    //   setAmounts(startingPercents.forEach((startingPercent) => {
    //     const id = Math.floor(Math.random() * 10000) + 1
    //     calculatedTipAmount = amount.subtotal * (startingPercent / 100)
    //     calculatedTotal = amount.subtotal + calculatedTipAmount
    //     newAmount = {
    //       id: id, 
    //       subtotal: amount.subtotal,
    //       tipAmount: calculatedTipAmount,
    //       total: calculatedTotal,
    //       highlight: false,
    //     }
    //     setAmounts([...amounts, newAmount])
    //   }))
    // } 
    const newAmount = { id, ...amount }
    setAmounts([...amounts, newAmount])
}


  // Delete Amount
  const deleteAmount = (id) => {
    setAmounts(amounts.filter((amount) => amount.id !== id))
  }

  // Toggle Highlight
  const toggleHighlight = (id) => {
    console.log(id)
    setAmounts(amounts.map((amount) => 
    amount.id === id ? { ...amount, highlight: !amount.highlight } : amount
    ))
  }

  return (
    <div className="App">
      <Header />
      <Instructions />
      <AddAmount 
        onAdd={addAmount}/>
      {amounts.length > 0 ? (
        <Amounts 
        amounts={amounts} 
        onDelete={deleteAmount}
        onToggle={toggleHighlight}
        />
      ) : ('')}


    </div>
  );
}

export default App;
