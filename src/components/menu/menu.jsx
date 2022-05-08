import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './menu.module.css';
const Menu = ({ menu, onMenuChange }) => {
  let navigate = useNavigate();

  const handleMenuClick = (menu) => {
    navigate(menu.URL);
    onMenuChange(menu.title);
  };

  return (
    <li className={style.menu}>
      <button className={style.button} onClick={() => handleMenuClick(menu)}>
        <h2 className={style.title}>{menu?.title}</h2>
      </button>
    </li>
  );
};

export default Menu;
