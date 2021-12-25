import React from 'react';
import styles from './MeetupDetail.module.css';

function MeetupDetail({ image, address, description, title }) {
  return (
    <section className={styles.detail}>
      <img src={image} alt={title} />
      <h1>{description}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
