interface ExpenseProps {
  formattedTotalExpense: string;
}

const Expense: React.FC<ExpenseProps> = ({ formattedTotalExpense }) => {
  return (
    <div>
      <h3>Total Despesa: {formattedTotalExpense}</h3>
    </div>
  );
};

export default Expense;
