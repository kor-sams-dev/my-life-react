import React from 'react';
import ImageCard from '../image_card/image_card';
import style from './header.module.css';
const Header = ({ title, profileIcon }) => {
  return (
    <header className={style.header}>
      <h2 className={style.title}>{title}</h2>
      <section className={style.icon_wrapper}>
        <ImageCard className={style.icon} size="small" image={profileIcon} />
      </section>
    </header>
  );
};

export default Header;
