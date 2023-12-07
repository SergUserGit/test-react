import like from "../../images/heart_no_checked.svg";
import like_checked from "../../images/heart_checked.svg";
import split_auto from "../../images/split_auto.svg";
import css from "./AutoCatalogItem.module.css";
import { useState, useEffect } from "react";
import DetailedInformation from "../DetailedInformation/DetailedInformation";

const AutoCatalogItem = ({
  make,
  model,
  year,
  rentalPrice,
  adressCity,
  adressCountry,
  rentalCompany,
  type,
  idAuto,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accesOne,
  accesTwo,
  functionalOne,
  accesThree,
  functionalTwo,
  functionalThree,
  minimumAge,
  rentalConditionTwo,
  rentalConditionThree,
  mileAge,
  imgAuto,
  autoFilter,
  autoFilterPrice,
  autoFilterMilOne,
  autoFilterMilTwo,
}) => {
  const [isLike, setIsLike] = useState(false);
  const [detailedIsOpen, setDetailedIsOpen] = useState(false);

  function onClickButtonLike() {
    setIsLike((state) => !state);
    const arrayLikeCard =
      JSON.parse(localStorage.getItem("arrayCardItemAuto")) ?? [];
    if (isLike) {
      const arrayFilter = arrayLikeCard.filter(
        (element) => element.idAuto !== idAuto
      );
      localStorage.setItem("arrayCardItemAuto", JSON.stringify(arrayFilter));
    } else {
      arrayLikeCard.push({
        make,
        model,
        year,
        rentalPrice,
        adressCity,
        adressCountry,
        rentalCompany,
        type,
        idAuto,
        functionalities,
        fuelConsumption,
        engineSize,
        description,
        accesOne,
        accesTwo,
        functionalOne,
        accesThree,
        functionalTwo,
        functionalThree,
        minimumAge,
        rentalConditionTwo,
        rentalConditionThree,
        mileAge,
        imgAuto,
      });
      localStorage.setItem("arrayCardItemAuto", JSON.stringify(arrayLikeCard));
    }
  }

  function onClickButtonLearnMore() {
    setDetailedIsOpen((state) => !state);
  }

  useEffect(() => {
    const arrayLikeCard =
      JSON.parse(localStorage.getItem("arrayCardItemAuto")) ?? [];
    const inArray =
      arrayLikeCard.find((element) => element.idAuto === idAuto) === undefined;
    setIsLike(!inArray);
  }, [idAuto]);

  function getStyleItem() {
    if (autoFilterMilOne === 0 && autoFilterMilTwo === 0) {
      if (autoFilter === "show all" && autoFilterPrice === "$show all") {
        return "list-item";
      } else if (autoFilter === make && autoFilterPrice === rentalPrice) {
        return "list-item";
      } else if (autoFilter === make && autoFilterPrice === "$show all") {
        return "list-item";
      } else if (autoFilter === "show all" && autoFilterPrice === rentalPrice) {
        return "list-item";
      } else {
        return "none";
      }
    } else if (autoFilterMilOne === 0 && autoFilterMilTwo !== 0) {
      if (
        autoFilter === "show all" &&
        autoFilterPrice === "$show all" &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else if (
        autoFilter === make &&
        autoFilterPrice === rentalPrice &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else if (
        autoFilter === make &&
        autoFilterPrice === "$show all" &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else if (
        autoFilter === "show all" &&
        autoFilterPrice === rentalPrice &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else {
        return "none";
      }
    } else if (autoFilterMilOne !== 0 && autoFilterMilTwo === 0) {
      if (
        autoFilter === "show all" &&
        autoFilterPrice === "$show all" &&
        mileAge >= autoFilterMilOne
      ) {
        return "list-item";
      } else if (
        autoFilter === make &&
        autoFilterPrice === rentalPrice &&
        mileAge >= autoFilterMilOne
      ) {
        return "list-item";
      } else if (
        autoFilter === make &&
        autoFilterPrice === "$show all" &&
        mileAge >= autoFilterMilOne
      ) {
        return "list-item";
      } else if (
        autoFilter === "show all" &&
        autoFilterPrice === rentalPrice &&
        mileAge >= autoFilterMilOne
      ) {
        return "list-item";
      } else {
        return "none";
      }
    } else if (autoFilterMilOne !== 0 && autoFilterMilTwo !== 0) {
      if (
        autoFilter === "show all" &&
        autoFilterPrice === "$show all" &&
        mileAge >= autoFilterMilOne &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else if (
        autoFilter === make &&
        autoFilterPrice === rentalPrice &&
        mileAge >= autoFilterMilOne &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else if (
        autoFilter === make &&
        autoFilterPrice === "$show all" &&
        mileAge >= autoFilterMilOne &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else if (
        autoFilter === "show all" &&
        autoFilterPrice === rentalPrice &&
        mileAge >= autoFilterMilOne &&
        mileAge <= autoFilterMilTwo
      ) {
        return "list-item";
      } else {
        return "none";
      }
    }
  }

  const styleItem = {
    display: getStyleItem(),
  };

  return (
    <li style={styleItem} className={css.mainDivAuto}>
      <div className={css.itemLike}>
        <img className={css.imageAuto} src={imgAuto} alt="card auto" />
        <button onClick={onClickButtonLike} className={css.buttonLike}>
          <img src={isLike ? like_checked : like} alt="like" />
        </button>
      </div>
      <div className={css.infoModelAuto}>
        <p className={css.paragraphInfoAuto}>
          <span className={css.styleBlakInfo}>{make}</span>&nbsp;
          <span className={css.styleBlueInfo}>{model}</span>
          <span className={css.styleBlakInfo}>,</span>&nbsp;
          <span className={css.styleBlakInfo}>{year}</span>
        </p>
        <span className={css.spanRentalPrice}>{rentalPrice}</span>
      </div>
      <p className={css.paraghDateAuto}>
        <span className={css.spanAutoInfo}>{adressCity}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{adressCountry}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{rentalCompany}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{type}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{model}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{idAuto}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{functionalities}</span>
      </p>
      <button onClick={onClickButtonLearnMore} className={css.buttonLeanMore}>
        <span className={css.spanLeanMore}>Learn more</span>
      </button>
      {detailedIsOpen && (
        <DetailedInformation
          make={make}
          model={model}
          year={year}
          adressCity={adressCity}
          adressCountry={adressCountry}
          idAuto={idAuto}
          type={type}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          description={description}
          accesOne={accesOne}
          accesTwo={accesTwo}
          functionalOne={functionalOne}
          accesThree={accesThree}
          functionalTwo={functionalTwo}
          functionalThree={functionalThree}
          minimumAge={minimumAge}
          rentalConditionTwo={rentalConditionTwo}
          rentalConditionThree={rentalConditionThree}
          mileAge={mileAge}
          rentalPrice={rentalPrice}
          imgAuto={imgAuto}
          setDetailedIsOpen={setDetailedIsOpen}
        />
      )}
    </li>
  );
};
export default AutoCatalogItem;
