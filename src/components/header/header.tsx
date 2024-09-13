import './header.css';
import { Link } from 'react-router-dom';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline'

export default function Header(){
  return(
    <header className='container'>
      <nav>
        <img src="/nextcash.svg" alt="icone do site" className='logo' />

        <ul className='container-nav'>
          <Link to={'/home'}><li>Home</li></Link>
          <Link to={'/dashboard'}><li>Dashboard</li></Link>
          <Link to={'/sobre'}><li>Sobre</li></Link>  
        </ul>
      </nav>

      <div className='profile'>
        <BellIcon className='icon'/>
        <UserCircleIcon className='icon' />
      </div>
    </header>
  )
}