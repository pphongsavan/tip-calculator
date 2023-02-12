import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Amounts from "./components/Amounts";
import AddAmount from "./components/AddAmount";
import CalculateTax from "./components/CalculateTax";
import SplitBill from "./components/SplitBill";
import Footer from "./components/Footer";
import { TbArrowBigDownLines, TbCircle1, TbCircle2 } from "react-icons/tb";

function App() {
  const [amounts, setAmounts] = useState([]);
  const [subtotal, setSubtotal] = useState("");
  const [percent, setPercent] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [tax, setTax] = useState("");
  const [taxSubTotal, setTaxSubtotal] = useState("");
  const [grandTotal, setGrandTotal] = useState("");
  const [totalToSplit, setTotalToSplit] = useState("");

  const addAmount = (amount) => {
    const id = amounts.length + 1;
    const newAmount = { id, ...amount };
    setAmounts([...amounts, newAmount]);
  };

  const deleteAmount = (id) => {
    setAmounts(amounts.filter((amount) => amount.id !== id));
  };

  const toggleHighlight = (id) => {
    setAmounts(
      amounts.map((amount) =>
        amount.id === id ? { ...amount, highlight: !amount.highlight } : amount
      )
    );
    fillTaxSubtotal(id);
  };

  const refill = (id) => {
    const toRedo = amounts.find((amount) => amount.id === id);
    refillForm(toRedo);
  };

  const fillTaxSubtotal = (id) => {
    const toFill = amounts.find((amount) => amount.id === id);
    fillTax(toFill);
  };

  const refillForm = (amt) => {
    setSubtotal(amt.subtotal);
  };

  const fillTax = (amt) => {
    setTaxSubtotal(amt.total);
  };

  const fillSplitBill = () => {
    if (!grandTotal) {
      alert("Not calculated yet. Use the Tax form to calculate Grand Total.");
    }
    setTotalToSplit(grandTotal);
  };

  return (
    <div>
      <Header />
      <div className="App">
        <Instructions />
        <div id="tips">
          <div className="container">
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
          </div>
        </div>
        <div id="tax">
          <div className="bg-tax">
            <div id="calc-tax" className="container">
              <CalculateTax
                tax={tax}
                taxSubTotal={taxSubTotal}
                setTax={setTax}
                setTaxSubtotal={setTaxSubtotal}
                grandTotal={grandTotal}
                setGrandTotal={setGrandTotal}
              />
            </div>

            <div className="bg-tax-mid">
              <div className="tax-mid container">
                <div className="row justify-content-center">
                  <div className="col col-md-8">
                    <div className="total-card tax-card w-75 mb-3">
                      <h3 className="grand-total mb-4">Grand Total:</h3>

                      {grandTotal ? (
                        <span className="grand-total-num mb-5">
                          <b>${grandTotal}</b>
                        </span>
                      ) : (
                        <span className="grand-total-ph mb-5">
                          Not yet calculated. Fill Total and Tax above
                        </span>
                      )}
                      <button
                        title="Copy Grand Total to Split Bill form"
                        className="col-md-8 align-self-center btn btn-lg btn-primary"
                        onClick={() => fillSplitBill()}
                      >
                        <TbArrowBigDownLines />
                        Copy to Step 3
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-split">
          <div id="split" className="container">
            <SplitBill
              totalToSplit={totalToSplit}
              setTotalToSplit={setTotalToSplit}
            />
          </div>
        </div>

        <div className="bg-about"></div>
        <div id="about" className="container-fluid mb-5">
          <div className="row justify-content-center">
            <section className="col-md-9">
              <h4>About This Calculator:</h4>
              <p>
                Calculating tips takes too many taps. I wanted to make it as
                quick as possible.
              </p>
              <h5>Why a table?</h5>
              <p>
                Ever feel like you're tipping too little? Or can't remember your
                calculations? With a table, all of your calculations are
                available for easy comparisons. For repetitive calculations,
                click the <TbCircle1 size="1.4rem" /> icon in a row to re-copy
                that subtotal to the top form.
                <br></br>
                <br></br>I was particularly inspired by an instance where the
                server was hovering over us as we tried to discuss, and we
                wanted to make this decision discreetly. So I’ve added the
                ability to highlight rows by double-tapping so you can easily
                show your friends which tip you want to go with.
              </p>
              <h5>Why is tax a separate step?</h5>
              <p>
                Did you know that it's perfectly acceptable to tip based on the
                pre-tax total? Most tip calculators don't take this into
                account. So I've made the tax addition a separate step after.
                For fast calculations, click the <TbCircle2 size="1.4rem" />{" "}
                icon in a row to copy the total to this form. Then you can go
                further and split the bill if needed.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
