import React from 'react';
import ImageCard from '../image_card/image_card';
import Menus from '../menus/menus';
import style from './navigation.module.css';

const Navigation = ({ title, profileImage, menus, onMenuChange }) => {
  return (
    <div className={style.nav}>
      <header className={style.header}>
        <h1 className={style.title}>{title}</h1>
      </header>
      <main>
        <section className={style.profile_wrapper}>
          <ImageCard image={profileImage} />
        </section>
        <section className={style.menus_wrapper}>
          <Menus menus={menus} onMenuChange={onMenuChange} />
        </section>
      </main>
    </div>
  );
};

export default Navigation;
