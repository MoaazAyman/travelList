export default function Item({ item, onDeleteItems, onUpdateItems }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onUpdateItems(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantitiy} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
