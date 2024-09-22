import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { useUser } from "../../contexts/UserContext";
import './home.css'

export default function Home(){
  const { login, user } = useUser();

  return(
    <section className="home-container">
      <div className="introdution-text">
        <h2>Bem vindo {user?.name}</h2>
        <p>Venha conferir seu relatorio de orçamento mensal</p>
      </div>

    </section>
  )
}