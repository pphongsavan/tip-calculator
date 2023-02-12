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
    <div className="row justify-content-center">
      <div className="col-9 col-sm-8">
        <div className="mb-1">
          <h2>
            <TbCircle3 size="1.8rem" className="icon-split" /> Split the Bill
          </h2>
        </div>
        <div className="row">
          <div className="form-group col col-md-3">
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
          <div className="col col-md-3 mb-4">
            <label htmlFor="numPeopleInput"># of People *</label>
            <div className="input-group">
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
                  setNumOfPeople(
                    (prevNumOfPeople) => parseInt(prevNumOfPeople) - 1
                  )
                }
              >
                -
              </button>
              <button
                title="Increment Num of People"
                type="button"
                className="btn btn-outline-secondary"
                onClick={() =>
                  setNumOfPeople(
                    (prevNumOfPeople) => parseInt(prevNumOfPeople) + 1
                  )
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col col-md-8">
            <div className="total-card split-card mb-2">
              <h3 className="grand-total mb-3">Split: </h3>
              {splitTotal ? (
                <span className="grand-total-num">
                  <b>${splitTotal}</b>{" "}
                  <span className="grand-total">per person</span>
                </span>
              ) : (
                <span className="grand-total-ph">
                  Split not calculated yet. Fill Grand Total and # of People
                  above.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitBill;
