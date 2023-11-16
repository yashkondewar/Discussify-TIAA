import React from "react";
import QuoraHeader from "./QuoraHeader";
import "./css/Quora.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";

function Quora({ allData }) {
  return (
    <div className="quora">
      <QuoraHeader />
      <div className="main">
        <Sidebar />
        <div className="quora__contents">
          <Feed allData={allData} />
          <Widget allData={allData} />
        </div>
      </div>
    </div>
  );
}

export default Quora;
