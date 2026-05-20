import { Menu, Search } from 'lucide-react';
import './header.css';
import logo from '../../assets/hortifrutig.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu">
          <Menu size={22} />
          <span>Menu</span>
        </button>

        <div className="header__logo">
          <img src={logo} alt="HortiFrutiG Logo" />
        </div>
      </div>

      <h1 className="header__title">HortiFrutiG</h1>

      <div className="header__right">
        <button className="header__search">
          <Search size={18} />
          <span>Buscar</span>
        </button>

        <button className="header__profile">
          <div className="header__avatar">L</div>

          <span className="header__username">
            Olá, Lucas
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;