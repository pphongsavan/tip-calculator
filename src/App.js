import "./App.css";
import { useState } from "react";
import { BsArrowRightSquare } from "react-icons/bs";

import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Amounts from "./components/Amounts";
import AddAmount from "./components/AddAmount";
import CalculateTax from "./components/CalculateTax";
import SplitBill from "./components/SplitBill";

function App() {
  const [amounts, setAmounts] = useState([]);
  const [subtotal, setSubtotal] = useState("");
  const [percent, setPercent] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [tax, setTax] = useState("");
  const [taxSubTotal, setTaxSubtotal] = useState("");
  const [grandTotal, setGrandTotal] = useState("");
  const [totalToSplit, setTotalToSplit] = useState("");

  // Add Amount
  const addAmount = (amount) => {
    const id = amounts.length + 1;
    console.log(amount);
    const newAmount = { id, ...amount };
    setAmounts([...amounts, newAmount]);
  };

  const addTax = (taxSubTotal, tax) => {};

  // Delete Amount
  const deleteAmount = (id) => {
    setAmounts(amounts.filter((amount) => amount.id !== id));
  };

  // Toggle Highlight
  const toggleHighlight = (id) => {
    setAmounts(
      amounts.map((amount) =>
        amount.id === id ? { ...amount, highlight: !amount.highlight } : amount
      )
    );
    fillTaxSubtotal(id);
  };

  //Redo
  const refill = (id) => {
    const toRedo = amounts.find((amount) => amount.id === id);
    refillForm(toRedo);
  };

  // Fill tax form with subtotal
  const fillTaxSubtotal = (id) => {
    const toFill = amounts.find((amount) => amount.id === id);
    fillTax(toFill);
  };

  // Fill form with subtotal
  const refillForm = (amt) => {
    setSubtotal(amt.subtotal);
  };

  // Fill tax for with subtotal
  const fillTax = (amt) => {
    setTaxSubtotal(amt.total);
  };

  const fillSplitBill = () => {
    if (!grandTotal) {
      alert(
        "Grand Total hasn't been calculated yet. Use the Tax form to calculate Grand Total."
      );
    }
    setTotalToSplit(grandTotal);
  };

  return (
    <div>
      <Header />
      <div className="App container">
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
            onFillTaxSub={fillTaxSubtotal}
          />
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-10 col-sm-5">
            <CalculateTax
              tax={tax}
              taxSubTotal={taxSubTotal}
              setTax={setTax}
              setTaxSubtotal={setTaxSubtotal}
              onAdd={addTax}
              grandTotal={grandTotal}
              setGrandTotal={setGrandTotal}
            />
          </div>

          <div className="grand-to-split col-10 col-sm-2">
            <BsArrowRightSquare
              title="Copy Grand Total to Split Bill form"
              size="3em"
              style={{
                color: "green",
                cursor: "pointer",
              }}
              onClick={() => fillSplitBill()}
            />
          </div>

          <div className="col-10 col-sm-5">
            <SplitBill
              totalToSplit={totalToSplit}
              setTotalToSplit={setTotalToSplit}
            />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
