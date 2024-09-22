import { useValueData } from '../../contexts/ExpenseContext';
import { calculateTotals } from '../../utils/calculateTotals';
import './graphic.css';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';

export default function Graphic(){
  const { data } = useValueData();

  const { totalIncome, totalExpense ,formattedTotalIncome, formattedTotalExpense, formattedTotalValue } = calculateTotals(data);

  const chartData = [
    { name: 'Renda', value: totalIncome },
    { name: 'Despesa', value: totalExpense },
  ];

  const COLORS = ['#82ca9d', '#ff6b6b'];

  return(
    <div className='graphic'>
      <h1>Grafico:</h1>
      <h3>Total Renda: {formattedTotalIncome}</h3>
      <h3>Total Despesa: {formattedTotalExpense}</h3>
      <h3>Saldo: {formattedTotalValue}</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {chartData.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}