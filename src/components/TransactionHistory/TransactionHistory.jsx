import SingleTransaction from "../SingleTransaction/SingleTransaction";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <SingleTransaction key={item.id} transaction={item} />
        ))}
      </tbody>
    </table>
  );
}
