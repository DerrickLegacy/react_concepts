import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function SharedLayOut() {
  return (
    <>
      <NavigationBar />
      <section className="section">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default SharedLayOut;
