import betrayal from '../assets/fears/betrayal.svg';
import violence from '../assets/fears/violence.svg';
import night from '../assets/fears/night.svg';
import newPlaces from '../assets/fears/new-places.svg';
import unusual from '../assets/fears/unusual.svg';
import mock from '../assets/fears/mock.svg';
import adults from '../assets/fears/adults.svg';
import mother from '../assets/fears/mother.svg';
import childProtection from '../assets/fears/child-protection.svg';
import doctors from '../assets/fears/doctors.svg';
import loneliness from '../assets/fears/loneliness.svg';

export const fearList = [
  { id: 1, title: 'Предательство', alt: 'betrayal', src: betrayal, selected: false },
  { id: 2, title: 'Насилие', alt: 'violence', src: violence, selected: false },
  { id: 3, title: 'Темнота', alt: 'night', src: night, selected: false },
  { id: 4, title: 'Новые  места', alt: 'new places', src: newPlaces, selected: false },
  {
    id: 5,
    title: 'Все непривычное, не оправдывающее ожиданий',
    alt: 'unusual things',
    src: unusual,
    selected: false,
  },
  {
    id: 6,
    title: 'Боязнь быть осмеянным за жизнь в детском доме',
    alt: 'make fun',
    src: mock,
    selected: false,
  },
  { id: 7, title: 'Взрослые люди', alt: 'adults', src: adults, selected: false },
  { id: 8, title: 'Страх, что мама исчезнет', alt: 'mother gone', src: mother, selected: false },
  {
    id: 9,
    title: 'Отберут органы опеки',
    alt: 'child protection',
    src: childProtection,
    selected: false,
  },
  { id: 10, title: 'Врачи', alt: 'doctors', src: doctors, selected: false },
  { id: 11, title: 'Одиночество', alt: 'loneliness', src: loneliness, selected: false },
];
