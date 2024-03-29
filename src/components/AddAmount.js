import { TbCircle1 } from "react-icons/tb";

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

    if (subtotal) {
      const newSubtotal = parseFloat(subtotal).toFixed(2);

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
      } else if (!percent && tipAmount) {
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
    <div className="row justify-content-center">
      <div className="col-9 col-sm-8">
        <div className="form-head mb-1">
          <TbCircle1 className="d-inline icon-tips" size="1.8rem" />
          <h2 className="d-inline">Tips and Total</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group col col-md-7 mb-2">
            <label htmlFor="subtotalInput" className="form-label">
              Subtotal *
            </label>
            <input
              type="number"
              id="subtotalInput"
              className="form-control"
              placeholder="$ XX.XX"
              value={subtotal}
              required="required"
              onChange={(e) => setSubtotal(e.target.value)}
            />
          </div>
          <div className="row g-0">
            <div className="form-group col col-md-3 mb-1">
              <label htmlFor="percentInput" className="form-label">
                Percent
              </label>
              <input
                type="number"
                id="percentInput"
                className="form-control"
                placeholder="XX %"
                value={percent}
                onChange={(e) => setPercent(e.target.value)}
              />
            </div>

            <div className="col col-md-1 d-flex justify-content-center align-items-center">
              <div>OR</div>
            </div>
            <div className="form-group col col-md-3 mb-3">
              <label htmlFor="tipAmountInput" className="form-label">
                Tip
              </label>
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

          <div className="d-flex justify-content-center">
            <div className="col-md-7">
              <input
                type="submit"
                className="btn btn-primary btn-lg mb-3"
                value="Calculate"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddAmount;
