import { createContext, useState } from 'react';
import './login.css'

export const Context = createContext({});

export default function Login(){
  const [login, setLogin] = useState('')

  const signUp = (event: any) => {
    event.preventDefault()
    setLogin(event.target.login.value);
  }

  return(
    <div className='login'>
      <h1 className='title'>Bem vindo de volta!</h1>
        <p className='subtitle'>Insira suas informações para prosseguir para o site!</p>

        <Context.Provider value={[login]}>
          <form className='form' id='form' onSubmit={signUp}>
            <label htmlFor="login">Login</label>
            <input type="text" name="login" placeholder="Noobmaster69" required/>
            
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" placeholder="senha123" required/>

            <button type='submit' className='buttonLogin'>Entrar</button>
          </form>
        </Context.Provider>
        
    </div>
  )
}