import { nanoid } from 'nanoid';

import image1_1x from '../images/gallery/gallery12_1x.jpg';
import image2_1x from '../images/gallery/gallery21_1x.jpg';
import image3_1x from '../images/gallery/gallery23_1x.jpg';
import image4_1x from '../images/gallery/gallery20_1x.jpg';

export const servicesData = [
  {
    title: 'Декор послуги та флористика для весілля',
    img: image1_1x,
    content: [
      {
        id: nanoid(),
        text: 'Букет нареченої, дружок, бутоньєрки',
      },
      {
        id: nanoid(),
        text: 'Президіум',
      },
      {
        id: nanoid(),
        text: 'Виїзна  церемонія',
      },
      {
        id: nanoid(),
        text: 'Фотозона',
      },
      {
        id: nanoid(),
        text: 'План розсадки',
      },
      {
        id: nanoid(),
        text: 'Весілля під замовлення',
      },
    ],
  },
  {
    title: 'Декор послуги та флористика',
    img: image2_1x,
    content: [
      {
        id: nanoid(),
        text: 'для магазинів',
      },
      {
        id: nanoid(),
        text: 'для кав’ярень',
      },
      {
        id: nanoid(),
        text: 'для ресторанів',
      },
    ],
  },
  {
    title: 'Виготовлення індивідуального декору',
    img: image3_1x,
    content: [
      {
        id: nanoid(),
        text: 'для магазинів',
      },
      {
        id: nanoid(),
        text: 'для кав’ярень',
      },
      {
        id: nanoid(),
        text: 'для ресторанів',
      },
    ],
  },
  {
    title: 'Індивідуальне оформлення ',
    img: image4_1x,
    content: [
      {
        id: nanoid(),
        text: 'для фотостудій',
      },
      {
        id: nanoid(),
        text: 'для фотоднів',
      },
      {
        id: nanoid(),
        text: 'індивідуальних фотосесій',
      },
    ],
  },
];
