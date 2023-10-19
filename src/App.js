import React from "react";
import './assets/css/mainstyle.css';
import Header from "./components/Header/Header";
import {useScroll} from "./hooks/useScroll";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  const [elementRef, setScroll] = useScroll();

  return (
    <BrowserRouter>

      <Header handleClick={setScroll}/>

        <Main toElement={elementRef}/>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
