import { useContext } from "react"
import { UserContext, useUser } from "../../contexts/UserContext"

export default function Home(){
  const { login, user } = useUser()
  return(
    <section>
      <h2>Bem vindo {user?.name}</h2>
    </section>
  )
}