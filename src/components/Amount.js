import { TiDeleteOutline } from "react-icons/ti";
import { CgRedo } from "react-icons/cg";
import { TbReceiptTax } from "react-icons/tb";

const Amount = ({ amount, onDelete, onToggle, onRefill, onFillTaxSub }) => {
  return (
    <tr
      className={`amount ${amount.highlight ? "highlight" : ""}`}
      onDoubleClick={() => onToggle(amount.id)}
    >
      <td>{amount.percent}</td>
      <td>{amount.subtotal}</td>
      <td>{amount.tipAmount}</td>
      <td>{amount.total}</td>
      <td className="icons">
        <TiDeleteOutline
          title="Delete Row"
          icon="fa-2x"
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDelete(amount.id)}
        />
        {/* </td>
        <td> */}
        <CgRedo
          title="Refill Subtotal"
          icon="fa-2x"
          style={{
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => onRefill(amount.id)}
        />
        <TbReceiptTax
          title="Fill Tax Subtotal"
          icon="fa-2x"
          style={{
            color: "green",
            cursor: "pointer",
          }}
          onClick={() => onFillTaxSub(amount.id)}
        />
      </td>
    </tr>
  );
};

export default Amount;
