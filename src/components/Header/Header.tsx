import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Burger from '../Burger/Burger';
import './Header.css';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const documentClickListener = () => {
      setOpenMenu(false);
    };

    if (openMenu) {
      document.addEventListener('click', documentClickListener);
    }

    return () => {
      document.removeEventListener('click', documentClickListener);
    };
  }, [setOpenMenu, openMenu]);

  return createPortal(
    <div className={openMenu ? 'navigation__wrapper--active' : ''}>
      <header className={`navigation `}>
        <a href="#">
          <img className="navigation__logo" alt="logo" src={require('./../../img/logo.svg')} />
        </a>
        <div onClick={(e) => e.stopPropagation()}>
          <Burger active={openMenu} setActive={setOpenMenu} />
        </div>

        <ul
          className={`navigation__list ${openMenu ? 'navigation__list--active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <li className="navigation__item">
            <a href="#">Календарь</a>
          </li>
          <li className="navigation__item">
            <a href="#">Отзывы</a>
          </li>
          <li className="navigation__item">
            <a href="#">Магазин</a>
          </li>
          <li className="navigation__item">
            <a href="#">Контакты</a>
          </li>
        </ul>
      </header>
    </div>,
    document.getElementById('overlay') as HTMLElement
  );
};

export default Header;
