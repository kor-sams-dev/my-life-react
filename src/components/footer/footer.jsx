import React from 'react';
import style from './footer.module.css';
const Footer = ({ contacts }) => {
  console.log(contacts);
  return (
    <footer className={style.footer}>
      <ul className={style.contact}>
        <h3 className={style.title}>Contact</h3>
        {contacts.map((contact) => (
          <li className={style.contact_item} key={contact.name}>
            {`${contact.name} :`}
            {contact.link ? (
              <a href={contact.link}>{contact.info}</a>
            ) : (
              <p>{contact.info}</p>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
