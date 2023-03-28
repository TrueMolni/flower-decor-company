//import { ChakraProvider } from '@chakra-ui/react'
import Header from "./modules/Header";
// import Button from "./shared/Button";
import Hero from "./modules/Hero";
import Features from "./modules/Features";
import "./App.css";

function App() {
  return (
    // <ChakraProvider>
    <div>
      <Header />
      <Hero />
      <Features />
    </div>
    // </ChakraProvider>
  );
}

export default App;
