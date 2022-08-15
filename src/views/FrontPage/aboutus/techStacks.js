import React from "react";
import "./techStacks.css";
import { techStacksData } from "../../../core/utils/helper";

const TechStacks = () => {
  return (
    <>
      <section className="slide-option">
        <div id="infinite" className="highway-slider">
          <div className="container highway-barrier">
            <ul className="highway-lane">
              {techStacksData.map((item, index) => {
                return (
                  <>
                    <li key={index} className="highway-car">
                      <span className={`fab ${item.stack}`}></span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStacks;
