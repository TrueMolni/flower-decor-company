//import { ChakraProvider } from '@chakra-ui/react'
import Header from "./modules/Header";
// import Button from "./shared/Button";
import Hero from "./modules/Hero";
import Features from "./modules/Features";
import Conditions from "./modules/Сonditions";
import Services from "./modules/Services";

import { data } from "./shared/data/servicesData";

import css from "./app.module.css";

function App() {
  return (
    // <ChakraProvider>
    <div className={css.wrapper}>
      <Header />
      <Hero />
      <Features />
      <Conditions title={"Умови співпраці"} />
      <Services items={data} />
    </div>
    // </ChakraProvider>
  );
}

export default App;
