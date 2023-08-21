export default function Stats({ numItems, numPacked, percantage }) {
  return (
    <footer className="stats">
      <em>
        {" "}
        You have {numItems} items on your list, and you already packed{" "}
        {numPacked} ({percantage}%)
      </em>
    </footer>
  );
}
