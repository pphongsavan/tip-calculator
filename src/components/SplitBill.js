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
    <form className="split-bill container" onSubmit={onSubmit}>
      <div className="row align-left">
        <h3>Split the Bill</h3>
      </div>
      <div className="row form-item col-12 col-lg-6 align-left">
        <label htmlFor="splitTotalInput">Grand Total *</label>
        <input
          type="number"
          id="splitTotalInput"
          className="form-control"
          placeholder="$ XX.XX"
          value={totalToSplit}
          onChange={(e) => setTotalToSplit(e.target.value)}
        />
      </div>
      <div className="row form-item col-12 col-lg-4 align-left">
        <label htmlFor="numPeopleInput"># of People *</label>
        <input
          type="number"
          id="numPeopleInput"
          className="form-control"
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
      <div className="form-item">
        <input
          type="submit"
          className="btn btn-primary"
          value="Calculate Split"
        />
      </div>
    </form>
  );
};

export default SplitBill;
