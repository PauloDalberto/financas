import { useState } from 'react';
import './login.css'
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [loginInput, setLoginInput] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

   function handleLogin(event: any) {
    event.preventDefault();
    setLoginInput(event.target.login.value);
    login({ name: loginInput });

    navigate('/home');
  };

  return(
    <div className='login'>
      <h1 className='title'>Bem vindo de volta!</h1>
        <p className='subtitle'>Insira suas informações para prosseguir para o site!</p>
        <form className='form' id='form' onSubmit={handleLogin}>
          <label htmlFor="login">Login</label>
          <input type="text" name="login" placeholder="Noobmaster69" onChange={(e) => setLoginInput(e.target.value)} required/>
          
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id='password' placeholder="senha123" required/>

          <button type='submit' className='button'>Entrar</button>
        </form>
    </div>
  )
}