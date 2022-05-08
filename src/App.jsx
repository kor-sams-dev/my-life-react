import style from './App.module.css';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './pages/main/main';

import { CONTACTS, MENUS } from './constants';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState('HOME');

  const handleMenuChange = (title) => {
    setMenu(title);
  };

  return (
    <BrowserRouter>
      <div className={style.page}>
        <div className={style.navigation}>
          <Navigation
            className={style.navigation}
            title={'Saem Life'}
            profileImage={'/img/me.jpg'}
            onMenuChange={handleMenuChange}
            menus={MENUS}
          ></Navigation>
        </div>
        <div className={style.header}>
          <Header
            className={style.header}
            title={menu}
            profileIcon={'/img/icon_me.png'}
          ></Header>
        </div>
        <div className={style.main}>
          <Main className={style.main}></Main>
        </div>
        <div className={style.footer}>
          <Footer className={style.footer} contacts={CONTACTS}></Footer>{' '}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
