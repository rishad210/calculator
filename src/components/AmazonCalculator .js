import React, { useState } from "react";
import "./AmazonCalculator.css";

import Apparel from "./apparel/apparel.js";
import Dropdown from "./Dropdown";
import MyComponent from "./api/MyComponent";
const AmazonCalculator = () => {
  const [apparel, setApparel] = useState("");
  const [shipMethod, setShipMethod] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [national, setNational] = useState("");
  const [gm, setGm] = useState("");
  const [price, setPrice] = useState("");
  const [amazonFees, setAmazonFees] = useState({
    referralFees: 0,
    closingFees: 20,
    shippingFees: 45,

    totalFees: 65.00,
    gst: 11.70,
    totalCharges: 76.70,
    youmake: 76.70,
  });

  const handleApparelChange = (event) => {
    setApparel(event.target.value);
  };

  const handleShipMethodChange = (event) => {
    setShipMethod(event.target.value);
  };

  const handleShippingCostChange = (event) => {
    setShippingCost(event.target.value);
  };

  const handleNationalChange = (event) => {
    setNational(event.target.value);
  };

  const handleGmChange = (event) => {
    setGm(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const calculateAmazonCharges = () => {
    const totalReferralFees = gm * (amazonFees.referralFees / 100);
    const totalClosingFees = amazonFees.closingFees;
    const totalShippingFees =
      shipMethod === "amazoneasyship" ? amazonFees.shippingFees : 0;
    const totalFees = totalReferralFees + totalClosingFees + totalShippingFees;
    const gst = totalFees * (amazonFees.gst / 100);
    const totalCharges = totalFees + gst;

    setAmazonFees({
      ...amazonFees,
      totalFees,
      gst,
      totalCharges,
    });
  };

  return (
    <div>
      <img
        src="https://pointnxt.com/wp-content/uploads/2022/11/Pointnxt_Logo_website-removebg-preview-230x51.png"
        class="custom-logo"
        alt="PointNXT"
        decoding="async"
        srcset="https://pointnxt.com/wp-content/uploads/2022/11/Pointnxt_Logo_website-removebg-preview-230x51.png 230w, https://pointnxt.com/wp-content/uploads/2022/11/Pointnxt_Logo_website-removebg-preview-300x67.png 300w, https://pointnxt.com/wp-content/uploads/2022/11/Pointnxt_Logo_website-removebg-preview.png 648w"
        sizes="(max-width: 230px) 100vw, 230px"
        width="230"
        height="51"
      ></img>

      <div className="AmazonContainer">
        {/* <ReferralUtil /> */}
        <Apparel />
        <div class="grid-container">
          <div>
            {/* <label htmlFor="price">Price:</label> */}
            <input
              className="inputStyle"
              id="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={handlePriceChange}
            />
          </div>

          <div>
            <select
              className="inputStyle"
              id="shipMethod"
              value={shipMethod}
              onChange={handleShipMethodChange}
            >
              <option disabled={true} value="">
                Select Shipping Method
              </option>
              <option value="amazoneasyship">Ship using Amazon EasyShip</option>
              <option value="national">Ship By self</option>
            </select>
          </div>
          {shipMethod === "national" ? (
            <div>
              <input
                className="inputStyle"
                id="shippingCost"
                type="number"
                placeholder="Shipping Cost"
                value={shippingCost}
                onChange={handleShippingCostChange}
              />
            </div>
          ) : null}

          {shipMethod !== "national" ? (
            <div>
              <input
                className="inputStyle"
                id="gm"
                type="number"
                placeholder="GM"
                value={gm}
                onChange={handleGmChange}
              />
              {/* <label htmlFor="gm">GM:</label> */}
            </div>
          ) : null}
          {shipMethod !== "national" ? (
            <div>
              {/* <label htmlFor="national">National:</label> */}
              <select
                className="inputStyle"
                id="national"
                value={national}
                onChange={handleNationalChange}
              >
                <option disabled={true} value="">
                  Local
                </option>
                <option value="regional">Regional</option>
                <option value="national">National</option>
                
              </select>
            </div>
          ) : null}
        </div>
        {/* <div>
        <button onClick={calculateAmazonCharges}>Calculate Amazon Charges</button>
      </div> */}
        <div className="tableContainer">
          <table class="table">
            <tbody>
              <tr>
                <th>
                  Referral Fees{" "}
                  
                </th>{" "}
                <td>
                  {" "}
                  Rs.<b id="tref">{amazonFees.referralFees}</b>
                </td>
              </tr>

              <tr>
                <th>Closing Fees</th>{" "}
                <td>
                  Rs.<b id="tclf">{amazonFees.closingFees}</b>
                </td>
              </tr>

              <tr>
                <th>Amazon Shipping Fees</th>{" "}
                <td>
                  Rs.<b id="asf">{amazonFees.shippingFees}</b>
                </td>
              </tr>

              <tr>
                <th>Referral+Closing+Shipping Fees</th>{" "}
                <td>
                  Rs.<b id="rcs"> {amazonFees.totalFees}</b>
                </td>
              </tr>

              <tr>
                <th>GST on Referral+Closing+Shipping Fees</th>{" "}
                <td>
                  Rs.<b id="grcs">{amazonFees.gst}</b>
                </td>
              </tr>

              <tr>
                <th>Total Amazon Charges</th>{" "}
                <td>
                  Rs.<b id="tchr">{amazonFees.totalCharges}</b>
                </td>
              </tr>

              <tr>
                <th>You Make</th>{" "}
                <td>
                  Rs.<b id="ym">{amazonFees.youmake}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <MyComponent />
      </div>
    </div>
  );
};

export default AmazonCalculator;
