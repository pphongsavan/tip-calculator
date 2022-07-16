import Amount from "./Amount"

const Amounts = ({ amounts, onDelete, onToggle }) => {

  return (

    <table className="amounts-table">
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
                />
            ))}
        </tbody>
    </table>
  )
} 

export default Amounts
