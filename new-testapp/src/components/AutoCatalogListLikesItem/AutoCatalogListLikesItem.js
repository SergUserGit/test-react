import split_auto from "../../images/split_auto.svg";
import css from "./AutoCatalogListLikesItem.module.css";
import { useState } from "react";
import DetailedInformation from "../DetailedInformation/DetailedInformation";

const AutoCatalogListLikesItem = ({
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
}) => {
  const [detailedIsOpen, setDetailedIsOpen] = useState(false);

  function onClickButtonLearnMore() {
    setDetailedIsOpen((state) => !state);
  }

  return (
    <li className={css.mainDivAuto}>
      <div className={css.itemLike}>
        <img className={css.imageAuto} src={imgAuto} alt="card auto" />
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
export default AutoCatalogListLikesItem;
