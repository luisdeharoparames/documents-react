import React from "react";
import Title from "../components/Title/Index";
import Nav_Docu from "../components/nav-docu/Index";
import Contenido from "../components/Body/Index";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
export const DocsPage = () => {
  const title = "Docs";
  return (
    <>
      <div className="">
        <div className="div">
          <Title title={title} />
        </div>
        <div className="navmenu">
          <Nav_Docu />
        </div>
        <div className="">
          <Contenido />
        </div>
      </div>
    </>
  );
};
