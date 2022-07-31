import Amount from "./Amount"

const Amounts = ({ amounts, onDelete, onToggle, onRefill }) => {

  return (

    <table className="amounts-table table table-hover">
        <tbody>
            <tr>
                <th>Percent (%)</th>
                <th>Subtotal ($)</th>
                <th>Tip Amount ($)</th>
                <th>Total ($)</th>
            </tr>
            {amounts.map((amount) => (
                <Amount 
                    key={amount.id}
                    amount={amount}
                    onDelete={onDelete} 
                    onToggle={onToggle}
                    onRefill={onRefill}
                />
            ))}
        </tbody>
    </table>
  )
} 

export default Amounts
