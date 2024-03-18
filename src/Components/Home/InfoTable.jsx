import React from "react";
import '../../Cssfolders/InfoTable.css';

const InfoTable = () => {
    return (
      <div className="info-table">
        <ul>
          <li>
            <img
              src="../src/assets/images/info-icon-01.png"
              alt=""
            />
            <h4>
              250 m2
              <br />
              <span>Total Flat Space</span>
            </h4>
          </li>
          <li>
            <img
              src="../src/assets/images/info-icon-02.png"
              alt=""
            />
            <h4>
              Contract
              <br />
              <span>Contract Ready</span>
            </h4>
          </li>
          <li>
            <img
              src="../src/assets/images/info-icon-03.png"
              alt=""
            />
            <h4>
              Payment
              <br />
              <span>Payment Process</span>
            </h4>
          </li>
          <li>
            <img
              src="../src/assets/images/info-icon-04.png"
              alt=""
            />
            <h4>
              Safety
              <br />
              <span>24/7 Under Control</span>
            </h4>
          </li>
        </ul>
      </div>
    );
};

export default InfoTable;
