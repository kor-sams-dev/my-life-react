import React from 'react';
import Menu from '../menu/menu';
import style from './menus.module.css';
const Menus = ({ menus, onMenuChange }) => {
  return (
    <ul className={style.menus}>
      {menus.map((menu) => (
        <Menu key={menu.URL} menu={menu} onMenuChange={onMenuChange} />
      ))}
    </ul>
  );
};

export default Menus;
