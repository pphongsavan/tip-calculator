const CalculateTax = ({
  tax,
  taxSubTotal,
  setTax,
  setTaxSubtotal,
  grandTotal,
  setGrandTotal,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (!tax || !taxSubTotal) {
      alert("Please make sure Total and Tax are filled");
      return;
    }
    const newGrand = (parseFloat(tax) + parseFloat(taxSubTotal)).toFixed(2);
    setGrandTotal(newGrand);
    console.log(grandTotal);
  };

  return (
    <form className="add-tax container" onSubmit={onSubmit}>
      <div className="row align-left">
        <h3>Tax</h3>
      </div>
      <div className="row col-md-6 col-12 form-item align-left">
        <label htmlFor="taxSubInput">Total *</label>
        <input
          type="number"
          id="taxSubInput"
          className="form-control"
          placeholder="$ XX.XX"
          value={taxSubTotal}
          onChange={(e) => setTaxSubtotal(e.target.value)}
        />
      </div>
      <div className="row col-md-6 col-12 form-item align-left">
        <label htmlFor="taxInput">Tax *</label>
        <input
          type="number"
          id="taxInput"
          className="form-control"
          placeholder="$ XX.XX"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
        />
      </div>
      {grandTotal ? (
        <span className="grand-total">
          Grand Total: <b>${grandTotal}</b>
        </span>
      ) : (
        ""
      )}
      <div className="form-item">
        <input type="submit" className="btn btn-success" value="Add Tax" />
      </div>
    </form>
  );
};

export default CalculateTax;
