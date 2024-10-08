import { Link } from 'react-router-dom';
import './header.css';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header(){
  return(
    <header className='container'>
      <nav>
        <img src="/nextcash.png" alt="icone do site" className='logo' />
        <ul className='container-nav'>
          <li><Link to='/'>Login</Link></li>
          <li><Link to='/home'>Home</Link></li>
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