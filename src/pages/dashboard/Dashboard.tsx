import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import './dashboard.css';
import { useValueData, ValueData } from "../../contexts/ExpenseContext";
import { useState } from "react";
import Graphic from "../../components/grapich/Graphic";
import { formatCurrency } from "../../utils/formatCurrenct";

export default function Dashboard() {
  const { addData, data, removeData, updateData } = useValueData(); 


  const [formData, setFormData] = useState<ValueData>({
    description: "",
    value: 0,
    typeSpent: "",
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editingIndex !== null) {
      updateData(editingIndex, formData); 
      setEditingIndex(null);
    } else {
      addData(formData);
    }
    setFormData({ description: "", value: 0, typeSpent: "" });
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setFormData(data[index]); 
  };

  const handleDelete = (index: number) => {
    removeData(index); 
  };

  return (
    <section className="dashboard-container">
      <div className="introdution-text">
        <h2>Minhas finanças</h2>
        <p>Venha conferir seu relatório de orçamento mensal</p>
      </div>

      <div className="dashboard-content">
        <div className="add">
          <div>
            <ArchiveBoxIcon className="icon" color="#157AFF" />
            <h2>Adicione o valor</h2>
          </div>
          <form className="add-form" onSubmit={handleSubmit}>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
            />

            <label htmlFor="value">Valor</label>
            <input
              type="number"
              name="value"
              id="value"
              placeholder="Digite um número"
              value={formData.value}
              onChange={handleInputChange}
            />

            <label htmlFor="typeExpense">Tipo de gasto</label>
            <select
              name="typeSpent"
              id="typeExpense"
              value={formData.typeSpent}
              onChange={handleInputChange}
            >
              <option value="" disabled>Selecione</option>
              <option value="Renda">Renda</option>
              <option value="Despesa">Despesa</option>
            </select>

            <button type="submit" className="button">
              Enviar dados
            </button>
          </form>

        </div>

        <div>
          <Graphic />
        </div>

        <div className="transactions">
          <h3>Lista de Transações</h3>
          <ul className="transactions-list">
            {data.map((item, index) => (
              <li key={index}>
                <span>{item.description}</span>
                <span>{formatCurrency(item.value)}</span>
                <span>{item.typeSpent}</span>
                <button className="button dashboard-button" onClick={() => handleEdit(index)}>Editar</button>
                <button className="button dashboard-button" onClick={() => handleDelete(index)}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
