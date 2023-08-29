import { nanoid } from "nanoid";

import image1_1x from "../images/gallery/gallery1_1x.jpg";
import image2_1x from "../images/gallery/gallery2_1x.jpg";
import image3_1x from "../images/gallery/gallery3_1x.jpg";
import image4_1x from "../images/gallery/gallery4_1x.jpg";
import image5_1x from "../images/gallery/gallery5_1x.jpg";
import image6_1x from "../images/gallery/gallery6_1x.jpg";

export const galleryData = [
  { id: nanoid(), img: image1_1x },
  { id: nanoid(), img: image2_1x },
  { id: nanoid(), img: image3_1x },
  { id: nanoid(), img: image4_1x },
  { id: nanoid(), img: image5_1x },
  { id: nanoid(), img: image6_1x },
];
