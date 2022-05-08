import React from 'react';
import style from './image_card.module.css';
const ImageCard = ({ image, size }) => {
  const displaySize = size === 'small' ? style.small : style.normal;
  return (
    <div className={`${style.img_wrapper} ${displaySize}`}>
      <img className={style.img} src={image} alt="imgae_card" />
    </div>
  );
};

export default ImageCard;
