import { useState, useEffect } from "react";
import { TbCircle3 } from "react-icons/tb";

const SplitBill = ({ totalToSplit, setTotalToSplit }) => {
  const [numOfPeople, setNumOfPeople] = useState("1");
  const [splitTotal, setSplitTotal] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    switch (e.target.id) {
      case "splitTotalInput":
        setTotalToSplit(value);
        break;
      case "numPeopleInput":
        setNumOfPeople(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (totalToSplit && numOfPeople) {
      setSplitTotal(
        (parseFloat(totalToSplit) / parseInt(numOfPeople)).toFixed(2)
      );
    }
  }, [totalToSplit, numOfPeople]);

  return (
    <div className="col-8">
      <div className="mb-3">
        <h3>
          <TbCircle3 size="1.5em" className="icon-split" /> Split the Bill
        </h3>
      </div>
      <div className="form-group col-lg-4 mb-3">
        <label htmlFor="splitTotalInput">Grand Total *</label>
        <input
          type="number"
          id="splitTotalInput"
          className="form-control"
          placeholder="$ XX.XX"
          value={totalToSplit}
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-4 mb-3">
        <label htmlFor="numPeopleInput"># of People *</label>
        <div className="input-group ">
          <input
            type="number"
            id="numPeopleInput"
            className="form-control"
            placeholder="X"
            value={numOfPeople}
            onChange={handleChange}
          />
          <button
            title="Decrement Num of People"
            type="button"
            className="btn btn-outline-secondary"
            onClick={() =>
              setNumOfPeople((prevNumOfPeople) => parseInt(prevNumOfPeople) - 1)
            }
          >
            -
          </button>
          <button
            title="Increment Num of People"
            type="button"
            className="btn btn-outline-secondary"
            onClick={() =>
              setNumOfPeople((prevNumOfPeople) => parseInt(prevNumOfPeople) + 1)
            }
          >
            +
          </button>
        </div>
      </div>
      <div className="total-zone mb-3">
        <span className="grand-total mb-3">Split: </span>
        {splitTotal ? (
          <span className="grand-total-num">
            <b>${splitTotal}</b> <span className="grand-total">per person</span>
          </span>
        ) : (
          <span className="grand-total">
            Split not calculated yet. Fill Grand Total and # of People above.
          </span>
        )}
      </div>
    </div>
  );
};

export default SplitBill;
