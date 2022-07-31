import { TiDelete } from 'react-icons/ti'
import { CgRedo } from 'react-icons/cg'


const Amount = ({ amount, onDelete, onToggle, onRefill }) => {
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
        <td><CgRedo 
            style={{
                color: 'blue', 
                cursor: 'pointer', 
                size: '2em'
                }} 
                onClick={() => onRefill(amount.id)}
            />
        </td>
    </tr>
  )
}

export default Amount
