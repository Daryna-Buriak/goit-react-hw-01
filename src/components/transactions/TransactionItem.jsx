import css from './TransactionItem.module.css';

export default function TransactionItem({ id, type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
