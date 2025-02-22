import css from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionsTable}>
      <thead className={css.tranTableHeader}>
        <tr>
          <th className={css.tranTableColumnBorder}>Type</th>
          <th className={css.tranTableColumnBorder}>Amount</th>
          <th className={css.tranTableColumnBorder}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.tranTableRow}>
            <td className={css.tranTableRowBorder}>{item.type}</td>
            <td className={css.tranTableRowBorder}>{item.amount}</td>
            <td className={css.tranTableRowBorder}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
