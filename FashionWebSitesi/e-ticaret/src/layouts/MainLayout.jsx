import React, { useEffect } from "react";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy/Policy";
import Footer from "../components/Layout/Footer/Footer";
import Modal from "../components/Modals/Modal";
import Proptypes from "prop-types";
import Dialog from "../components/Modals/Dialog/Dialog";
import { useState } from "react";


const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    // const dialogStatus = localStorage.getItem("dialog")
    //   ? JSON.parse(localStorage.getItem("dialog"))
    //   : localStorage.setItem("dialog", JSON.stringify(true));

    setTimeout(() => {
      setIsDialogShow(true);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Modal isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
