import React from "react";
import { Divider } from "@nextui-org/react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Content />
      <Divider />
      <Footer />
    </>
  );
}

export default App;
