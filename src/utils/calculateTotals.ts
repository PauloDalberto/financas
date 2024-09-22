import { ValueData } from "../contexts/ExpenseContext";
import { formatCurrency } from "./formatCurrenct";


export const calculateTotals = (data: ValueData[]) => {
  const totalIncome = data.filter(item => item.typeSpent === "Renda")
  .reduce((acc, item) => acc + Number(item.value), 0);
  const totalExpense = data.filter(item => item.typeSpent === "Despesa")
  .reduce((acc, item) => acc + Number(item.value), 0);

  const totalValue = totalIncome - totalExpense;

  const formattedTotalIncome = formatCurrency(totalIncome);
  const formattedTotalExpense = formatCurrency(totalExpense);
  const formattedTotalValue = formatCurrency(totalValue);

  return {
    totalIncome,
    totalExpense,
    totalValue,
    formattedTotalIncome,
    formattedTotalExpense,
    formattedTotalValue,
  };
};
