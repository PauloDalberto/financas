interface IncomeProps {
  formattedTotalIncome: string;
}

const Income: React.FC<IncomeProps> = ({ formattedTotalIncome }) => {
  return (
    <div>
      <h3>Total Renda: {formattedTotalIncome}</h3>
    </div>
  );
};

export default Income;
