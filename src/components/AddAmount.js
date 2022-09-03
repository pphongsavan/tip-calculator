const AddAmount = ({
  onAdd,
  subtotal,
  percent,
  tipAmount,
  setSubtotal,
  setPercent,
  setTipAmount,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    // Need Subtotal & Percent OR Tip to accept
    // and calculate
    // CANNOT ACCEPT:
    // Sub is blank
    // Sub is filled, but percent AND tip are blank
    // All fields are filled
    if (
      !subtotal ||
      (subtotal && percent && tipAmount) ||
      (subtotal && !percent && !tipAmount)
    ) {
      alert(
        "Please make sure Subtotal and either Percent and Tip are filled. \n\nForm will not accept if all fields are filled."
      );
      return;
    }

    // Sub is filled
    if (subtotal) {
      // Sub and percent is filled
      if (percent && !tipAmount) {
        const newSubtotal = parseFloat(subtotal).toFixed(2);
        const newPercent = parseInt(percent);
        const newTipAmount = parseFloat(subtotal * (percent / 100)).toFixed(2);
        const newTotal = (
          parseFloat(subtotal) + parseFloat(newTipAmount)
        ).toFixed(2);
        onAdd({
          subtotal: newSubtotal,
          percent: newPercent,
          tipAmount: newTipAmount,
          total: newTotal,
        });
      }
      // Sub and tip amount is filled
      else if (!percent && tipAmount) {
        const newSubtotal = parseFloat(subtotal).toFixed(2);
        const newTipAmount = parseFloat(tipAmount).toFixed(2);
        const newPercent = Math.round((tipAmount / subtotal) * 100);
        const newTotal = (
          parseFloat(subtotal) + parseFloat(newTipAmount)
        ).toFixed(2);
        onAdd({
          subtotal: newSubtotal,
          percent: newPercent,
          tipAmount: newTipAmount,
          total: newTotal,
        });
      }
    }

    setSubtotal("");
    setPercent("");
    setTipAmount("");
  };

  return (
    <form className="add-form container" onSubmit={onSubmit}>
      <div className="row justify-content-center">
        <div className="col-7 col-md-5 form-item align-left">
          <label htmlFor="subtotalInput">Subtotal *</label>
          <input
            type="number"
            id="subtotalInput"
            className="form-control"
            placeholder="$ XX.XX"
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3 col-md-2 form-item align-left">
          <label htmlFor="percentInput">Percent</label>
          <input
            type="number"
            id="percentInput"
            className="form-control"
            placeholder="XX %"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </div>
        <div className="col-4 col-md-3 form-item align-left">
          <label htmlFor="tipAmountInput">Tip</label>
          <input
            type="number"
            id="tipAmountInput"
            className="form-control"
            placeholder="$ XX.XX"
            value={tipAmount}
            onChange={(e) => setTipAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="form-item justify-content-center">
        <input
          type="submit"
          className="btn btn-outline-success btn-lg p-3 col-7 col-md-3 col-lg-2"
          value="Calculate"
        />
      </div>
    </form>
  );
};
export default AddAmount;
