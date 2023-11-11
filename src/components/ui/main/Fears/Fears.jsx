import React from 'react';

import styles from './Fears.module.css';
import betrayal from '../../../../assets/betrayal.svg';
import violence from '../../../../assets/violence.svg';
import night from '../../../../assets/night.svg';
import newPlaces from '../../../../assets/new-places.svg';
import unusual from '../../../../assets/unusual.svg';
import mock from '../../../../assets/mock.svg';
import adults from '../../../../assets/adults.svg';
import mother from '../../../../assets/mother.svg';
import childProtection from '../../../../assets/child-protection.svg';
import doctors from '../../../../assets/doctors.svg';

const Fears = () => {
  return (
    <div>
      <ul className={styles.fearsList}>
        <li>
          <img src={betrayal} alt='betrayal' />
          <p>Предательство</p>
        </li>
        <li>
          <img src={violence} alt='violence' />
          <p>Насилие</p>
        </li>
        <li>
          <img src={night} alt='darkness' />
          <p>Темнота</p>
        </li>
        <li>
          <img src={newPlaces} alt='new places' />
          <p>Новые места</p>
        </li>
        <li>
          <img src={unusual} alt='unusual' />
          <p>Все непривычное, не оправдывающее ожиданий</p>
        </li>
        <li>
          <img src={mock} alt='mock' />
          <p>Боязнь быть осмеянным за жизнь в детском доме</p>
        </li>
        <li>
          <img src={adults} alt='adults' />
          <p>Взрослые люди</p>
        </li>
        <li>
          <img src={mother} alt='mother' />
          <p>Страх, что мама исчезнет</p>
        </li>
        <li>
          <img src={childProtection} alt='child protection' />
          <p>Страх, что мама исчезнет</p>
        </li>
        <li>
          <img src={doctors} alt='doctors' />
          <p>Врачи</p>
        </li>
      </ul>
    </div>
  );
};

export default Fears;
