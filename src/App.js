import './App.css';
import { useState } from "react"

import Header from './components/Header';
import Instructions from './components/Instructions';
import Amounts from './components/Amounts';
import AddAmount from './components/AddAmount';


function App() {

const [amounts, setAmounts] = useState([])
const [subtotal, setSubtotal] = useState('')
const [percent, setPercent] = useState('')
const [tipAmount, setTipAmount] = useState('')


  // Add Amount
  const addAmount = (amount) => {
    const id = amounts.length + 1
    console.log(amount);
    const newAmount = { id, ...amount }
    setAmounts([...amounts, newAmount])

}


  // Delete Amount
  const deleteAmount = (id) => {
    setAmounts(amounts.filter((amount) => amount.id !== id))
  }

  // Toggle Highlight
  const toggleHighlight = (id) => {
    setAmounts(amounts.map((amount) => 
    amount.id === id ? { ...amount, highlight: !amount.highlight } : amount
    ))
  }


  //Redo 
  const refill = (id) => {
    console.log(id)
    const toRedo = (amounts.find((amount) => amount.id === id))
    refillForm(toRedo)

  }

  // Fill form with subtotal
  const refillForm = (amt) => {
      setSubtotal(amt.subtotal)
      // setPercent(amt.percent)
      // setTipAmount(amt.tipAmount)
  }

  return (
    <div className="App container">
      <Header />
      <Instructions />
      <AddAmount 
        amounts={amounts}
        onAdd={addAmount}
        subtotal={subtotal}
        percent={percent}
        tipAmount={tipAmount}
        setSubtotal={setSubtotal}
        setPercent={setPercent}
        setTipAmount={setTipAmount}
        />
      {amounts.length > 0 ? (
        <Amounts 
        amounts={amounts} 
        onDelete={deleteAmount}
        onToggle={toggleHighlight}
        onRefill={refill}
        />
      ) : ('')}

    </div>
  );
}

export default App;
