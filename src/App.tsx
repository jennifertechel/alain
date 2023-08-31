import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      200: "#CED3BF",
      300: "#697F72",
      400: "#F0F1ED",
    },
  },
  fonts: {
    heading: "bodoni",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
