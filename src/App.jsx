//import { ChakraProvider } from '@chakra-ui/react'
import Header from "./modules/Header";
// import Button from "./shared/Button";
import Hero from "./modules/Hero";
import Features from "./modules/Features";
import Conditions from "./modules/Сonditions";
import Services from "./modules/Services";
import Galery from "./modules/Gallery";
import ContactCall from "./modules/ContactCall";

import { servicesData } from "./shared/data/servicesData";
import { galleryData } from "./shared/data/galleryData";

import css from "./app.module.css";

function App() {
  return (
    // <ChakraProvider>
    <div className={css.wrapper}>
      <Header />
      <Hero />
      <Features />
      <Conditions />
      <Services items={servicesData} />
      <Galery data={galleryData} />
      <ContactCall />
    </div>
    // </ChakraProvider>
  );
}

export default App;
