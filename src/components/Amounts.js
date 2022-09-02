import Amount from "./Amount";

const Amounts = ({ amounts, onDelete, onToggle, onRefill, onFillTaxSub }) => {
  return (
    <table className="amounts-table table table-hover">
      <tbody>
        <tr>
          <th>Percent (%)</th>
          <th>Subtotal ($)</th>
          <th>Tip ($)</th>
          <th>Total ($)</th>
          <th>Actions</th>
        </tr>
        {amounts.map((amount) => (
          <Amount
            key={amount.id}
            amount={amount}
            onDelete={onDelete}
            onToggle={onToggle}
            onRefill={onRefill}
            onFillTaxSub={onFillTaxSub}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Amounts;
