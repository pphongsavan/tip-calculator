import { TiDelete } from 'react-icons/ti'

const Amount = ({ amount, onDelete, onToggle }) => {
  return (
    <tr className={`amount ${amount.highlight ? 'highlight' : ''}`} onDoubleClick={() => onToggle(amount.id)}>
        <td>{amount.percent}</td>
        <td>{amount.subtotal}</td>
        <td>{amount.tipAmount}</td>
        <td>{amount.total}</td>
        <td><TiDelete 
            style={{
                color: 'red', 
                cursor: 'pointer', 
                size: '2em'
                }} 
                onClick={() => onDelete(amount.id)}
            />
        </td>
    </tr>
  )
}

export default Amount
