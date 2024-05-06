import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js"
import Layout from "./pages/Layout.js";
import Reservation from "./pages/Reservation.js";
import Nav from "./components/Nav.js";
import { VStack } from "@chakra-ui/react";
import Footer from "./components/Footer.js";


function App() {
  return (
    <>
    <BrowserRouter>
    <VStack>
      <Nav/>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
        </Routes>
      <Footer/>
    </VStack>
   </BrowserRouter>
   </>
  );
}

export default App;
