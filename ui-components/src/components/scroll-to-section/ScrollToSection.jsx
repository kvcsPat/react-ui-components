import React, { useRef } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import Button from "../re-used/button/Button";
import Sections from "./Sections";

export default function ScrollToSection() {
  const sectionRef = useRef();

  function handleScrollToSection() {
    let position = sectionRef.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position - 20,
      behavior: "smooth",
    });
  }

  return (
    <Layout>
      <NavToHome componentTitle={"ScrollToSection"} />
      <Button
        btnText={"Scroll To Mango Bay"}
        btnClick={handleScrollToSection}
      />
      <Sections sectionRef={sectionRef} />
    </Layout>
  );
}
