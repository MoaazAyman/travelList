import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packinglist";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percantage = Math.round((numPacked / numItems) * 100);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearArrItems() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onUpdateItems={handleUpdateItems}
        onClearList={clearArrItems}
      />
      <Stats
        numItems={numItems}
        numPacked={numPacked}
        percantage={percantage}
      />
    </div>
  );
}
