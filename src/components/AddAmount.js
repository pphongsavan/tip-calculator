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
      const newSubtotal = parseFloat(subtotal).toFixed(2);

      // Sub and percent is filled
      if (percent && !tipAmount) {
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
    <form className="" onSubmit={onSubmit}>
      <div className="">
        <div className="">
          <label htmlFor="subtotalInput">Subtotal *</label>
          <input
            type="number"
            id="subtotalInput"
            className=""
            placeholder="$ XX.XX"
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value)}
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <label htmlFor="percentInput">Percent</label>
          <input
            type="number"
            id="percentInput"
            className=""
            placeholder="XX %"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="tipAmountInput">Tip</label>
          <input
            type="number"
            id="tipAmountInput"
            className=""
            placeholder="$ XX.XX"
            value={tipAmount}
            onChange={(e) => setTipAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="">
        <input
          type="submit"
          className=""
          value="Calculate"
        />
      </div>
    </form>
  );
};
export default AddAmount;
