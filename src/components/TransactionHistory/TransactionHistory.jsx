import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TR,
  TD,
  Type,
} from './TransactionHistory.styled';

function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TableBody>
        {transactions.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <TR key={id}>
              <Type>{type}</Type>
              <TD>{amount}</TD>
              <TD>{currency}</TD>
            </TR>
          );
        })}
      </TableBody>
    </Table>
  );
}

export { TransactionHistory };

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
