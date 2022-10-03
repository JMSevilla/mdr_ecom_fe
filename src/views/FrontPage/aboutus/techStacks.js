import React from "react";
import "./techStacks.css";
import { Box } from "@mui/material";
import { techStacksData } from "../../../core/utils/helper";

const TechStacks = () => {
  return (
    <>
      <Box className="slide-option">
        <div id="infinite" className="highway-slider">
          <div className="container-body highway-barrier">
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
      </Box>
    </>
  );
};

export default TechStacks;
