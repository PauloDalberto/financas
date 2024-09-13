import { Link } from 'react-router-dom';
import RouterComponent from '../../routes/Routes';
import './header.css';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header(){
  return(
    <header className='container'>
      <nav>
        <img src="/nextcash.svg" alt="icone do site" className='logo' />

        <ul className='container-nav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/about'>Sobre</Link></li>
        </ul>
      </nav>

      <div className='profile'>
        <BellIcon className='icon'/>
        <UserCircleIcon className='icon' />
      </div>
    </header>
  )
}