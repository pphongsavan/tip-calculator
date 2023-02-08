import { useEffect } from "react";
import { TbCircle2 } from "react-icons/tb";

const CalculateTax = ({
  tax,
  taxSubTotal,
  setTax,
  setTaxSubtotal,
  grandTotal,
  setGrandTotal,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;

    switch (e.target.id) {
      case "taxInput":
        setTax(value);
        break;
      case "taxSubInput":
        setTaxSubtotal(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (tax && taxSubTotal) {
      setGrandTotal((parseFloat(tax) + parseFloat(taxSubTotal)).toFixed(2));
    }
  }, [tax, taxSubTotal, setGrandTotal]);
  return (
    <div className="col-8">
      <div className="mb-3">
        <h3>
          <TbCircle2 size="1.5em" className="icon-tax" /> Tax
        </h3>
      </div>
      <form>
        <div className="form-group col-lg-4 mb-3">
          <label htmlFor="taxSubInput">Total *</label>
          <input
            type="number"
            id="taxSubInput"
            className="form-control"
            placeholder="$ XX.XX"
            value={taxSubTotal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-4 mb-3">
          <label htmlFor="taxInput">Tax *</label>
          <input
            type="number"
            id="taxInput"
            className="form-control"
            placeholder="$ XX.XX"
            value={tax}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default CalculateTax;
