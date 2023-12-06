import "react-dropdown/style.css";
import css from "./AutoCatalog.module.css";
import React, { useState } from "react";

const AutoCatalog = () => {
  const [mileageOneFilter, SetMileageOneFilter] = useState(0);
  const [mileageTwoFilter, SetMileageTwoFilter] = useState(0);

  function onChangeMileageOne(e) {
    const { value } = e.target;
    SetMileageOneFilter(value);
  }

  function onChangeMileageTwo(e) {
    const { value } = e.target;
    SetMileageTwoFilter(value);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "29px",
        paddingBottom: "24px",
      }}
    >
      <div className={css.dropdownGroupFlex}>
        <div>
          <p className={css.dropdownDesc}>Сar mileage / km</p>
          <input
            value={mileageOneFilter}
            className={css.inputMileage}
            type="number"
            name="mileageone"
            id="mileageone"
            onChange={onChangeMileageOne}
          />
          <input
            value={mileageTwoFilter}
            className={css.inputMileageTwo}
            type="number"
            name="mileagetwo"
            id="mileagetwo"
            onChange={onChangeMileageTwo}
          />
        </div>
      </div>
    </div>
  );
};
export default AutoCatalog;
