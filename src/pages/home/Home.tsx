import { useUser } from "../../contexts/UserContext";
import './home.css'

export default function Home(){
  const { user } = useUser();

  return(
    <section className="home-container">
      <div className="introdution-text">
        <h2>Bem vindo {user?.name}</h2>
        <p>Venha conferir seu relatorio de orçamento mensal</p>
      </div>

      <p className="description">Descubra uma forma prática e eficaz de administrar suas finanças pessoais com nosso Gerenciador de Despesas! Este aplicativo foi projetado para ajudar você a acompanhar suas receitas e despesas mensais de maneira simples e intuitiva.</p>
      
      <ul className="description-list">
        <h2>Aqui, voce consegue: </h2>
        <li>Adicionar suas Transações: Clique em "Adicionar Despesa" ou "Adicionar Renda" e preencha os campos com a descrição, valor e tipo de transação. É rápido e fácil!</li>
        <li>Visualizar seu Orçamento: Acesse uma visão clara do seu fluxo financeiro, com totais de receitas, despesas e saldo restante. Mantenha-se informado sobre a saúde do seu orçamento.</li>
        <li>Ver Gráficos e Relatórios: Utilize gráficos interativos para visualizar suas despesas e receitas de forma dinâmica, facilitando a identificação de padrões e áreas de melhoria.</li>
      </ul>
    </section>
  )
}