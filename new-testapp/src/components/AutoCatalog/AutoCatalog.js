import React, { useState, useEffect } from "react";
import AutoCatalogList from "../AutoCatalogList/AutoCatalogList";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import css from "./AutoCatalog.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import { getAdverts } from "../../redux/selectors";

let page = 1;
const AutoCatalog = () => {
  const dispatch = useDispatch();
  const autoCatalog = useSelector(getAdverts);

  const optionsAutoFilter = [
    "show all",
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Chrysler",
    "Kia",
    "Land",
  ];

  const defaultOption = optionsAutoFilter[0];

  const countOfPagePagination = 12;
  const [countOfElement, SetCountOfElement] = useState(12);
  const [visibleLoadMore, SetvisibleLoadMore] = useState(true);
  const [autoFilter, SetAutoFilter] = useState("show all");
  const [autoFilterPrice, SetAutoFilterPrice] = useState("$show all");
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

  function getCopyArray(Array, indexFirst, IndexLast) {
    return Array.slice(indexFirst, IndexLast);
  }

  function onClickLoadeMoreBtn() {
    page += 1;
    const firstElement = page * countOfPagePagination;
    SetCountOfElement(firstElement);
    if (firstElement >= autoCatalog.length) {
      SetvisibleLoadMore(false);
    }
  }

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  function onSelectDropdown(option) {
    SetAutoFilter(option.value);
  }

  function onSelectDropdownPrice(option) {
    SetAutoFilterPrice("$" + option.value);
  }

  function getArrayPrices(arrayOfPrice) {
    let newArray = [];
    for (const i of arrayOfPrice) {
      const findElement = newArray.find((el) => el === i);
      if (findElement === undefined) {
        newArray.push(i);
      }
    }
    newArray.sort((a, b) => a - b);
    return ["show all", ...newArray.map((el) => String(el))];
  }

  const pricesFilter = getArrayPrices(
    autoCatalog.map((el) => parseInt(el.rentalPrice.replace("$", "")))
  );

  const defaultOptionPricesFilter = pricesFilter[0];

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
          <p className={css.dropdownDesc}>Car brand</p>
          <Dropdown
            options={optionsAutoFilter}
            value={defaultOption}
            onChange={onSelectDropdown}
            className={css.dropdown}
            menuClassName={css.dropdownMenu}
            controlClassName={css.dropdownControl}
          />
        </div>
        <div>
          <p className={css.dropdownDesc}>Price/ 1 hour</p>
          <Dropdown
            options={pricesFilter}
            value={defaultOptionPricesFilter}
            className={css.dropdown}
            menuClassName={css.dropdownMenu}
            controlClassName={css.dropdownControl}
            onChange={onSelectDropdownPrice}
          />
        </div>
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

      <AutoCatalogList
        autoCatalogList={getCopyArray(autoCatalog, 0, countOfElement)}
        filter={autoFilter}
        filterPrice={autoFilterPrice}
        filterMilOne={parseInt(mileageOneFilter)}
        filterMilTwo={parseInt(mileageTwoFilter)}
      />
      {visibleLoadMore && (
        <ButtonLoadMore onClickLoadeMoreBtn={onClickLoadeMoreBtn} />
      )}
    </div>
  );
};
export default AutoCatalog;
