// import { CgRedo } from "react-icons/cg";
import { TbCircle1, TbCircle2, TbTrash } from "react-icons/tb";

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
        {/* </td>
        <td> */}
        <TbCircle1
          title="Reuse Subtotal"
          size="2em"
          style={{
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => onRefill(amount.id)}
        />
        <TbCircle2
          title="Copy to Step 2"
          size="2em"
          style={{
            color: "green",
            cursor: "pointer",
          }}
          onClick={() => onFillTaxSub(amount.id)}
        />
        <TbTrash
          title="Delete Row"
          size="2em"
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDelete(amount.id)}
        />
      </td>
    </tr>
  );
};

export default Amount;
