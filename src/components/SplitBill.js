import { useState } from "react";

const SplitBill = ({ totalToSplit, setTotalToSplit }) => {
  const [numOfPeople, setNumOfPeople] = useState("");
  const [splitTotal, setSplitTotal] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!totalToSplit || !numOfPeople) {
      alert("Please make sure Grand Total and # of People are filled");
      return;
    }

    const newSplitTotal = (
      parseFloat(totalToSplit) / parseInt(numOfPeople)
    ).toFixed(2);
    setSplitTotal(newSplitTotal);
  };

  return (
    <form className="split-bill" onSubmit={onSubmit}>
      <div className="">
        <h3>Split the Bill</h3>
      </div>
      <div className="">
        <label htmlFor="splitTotalInput">Grand Total *</label>
        <input
          type="number"
          id="splitTotalInput"
          className=""
          placeholder="$ XX.XX"
          value={totalToSplit}
          onChange={(e) => setTotalToSplit(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="numPeopleInput"># of People *</label>
        <input
          type="number"
          id="numPeopleInput"
          className=""
          placeholder="X"
          value={numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
        />
      </div>

      {splitTotal ? (
        <span className="grand-total">
          <b>${splitTotal}</b> per person
        </span>
      ) : (
        ""
      )}
      <div className="">
        <input
          type="submit"
          className=""
          value="Calculate Split"
        />
      </div>
    </form>
  );
};

export default SplitBill;
