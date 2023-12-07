import css from "./DetailedInformation.module.css";
import image_close from "../../images/icon_close.svg";
import split_auto from "../../images/split_auto.svg";
import { useState } from "react";

const DetailedInformation = ({
  make,
  model,
  year,
  adressCity,
  adressCountry,
  idAuto,
  type,
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
  rentalPrice,
  imgAuto,
  setDetailedIsOpen,
}) => {
  const [idClose, setIdClose] = useState(false);

  function convertMileAge(mileAge) {
    const valueOne = mileAge / 1000;
    return String(valueOne).replace(".", ",");
  }

  function changePrice(price) {
    return price.replace("$", "") + "$";
  }

  function onClickButtonIsClose() {
    setIdClose(true);
    setDetailedIsOpen(false);
  }

  return (
    <>
      {idClose === false && (
        <div onClick={onClickButtonIsClose} className={css.backDrop}>
          <div className={css.modalDetail}>
            <button onClick={onClickButtonIsClose} className={css.buttonClose}>
              <img src={image_close} alt="close" />
            </button>
            <img className={css.image_test_big} src={imgAuto} alt="test big" />
            <p className={css.detailInfoAuto}>
              <span className={css.spanMakeDetail}>{make}</span>&nbsp;
              <span className={css.spanModelDetail}>{model}</span>
              <span className={css.spanSplitlDetail}>,</span>&nbsp;
              <span className={css.spanYearlDetail}>{year}</span>
            </p>
            <p className={css.detailCharakterAuto}>
              <span className={css.spanDetailCharakte}>{adressCity}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanDetailCharakte}>{adressCountry}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanDetailCharakte}>id:&nbsp;{idAuto}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanDetailCharakte}>Year:&nbsp;{year}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanDetailCharakte}>Type:&nbsp;{type}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanDetailCharakte}>
                Fuel Consumption:&nbsp;{fuelConsumption}
              </span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanDetailCharakte}>
                Engine Size:&nbsp;{engineSize}
              </span>
            </p>
            <p className={css.detailDescription}>{description}</p>
            <h2 className={css.headAccessories}>
              Accessories and functionalities:
            </h2>
            <p className={css.detailAccessFunctionalAuto}>
              <span className={css.spanAccessFunctional}>{accesOne}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanAccessFunctional}>{accesTwo}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanAccessFunctional}>{functionalOne}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanAccessFunctional}>{accesThree}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanAccessFunctional}>{functionalTwo}</span>
              <img src={split_auto} alt="split auto" />
              <span className={css.spanAccessFunctional}>
                {functionalThree}
              </span>
            </p>
            <h2 className={css.headRentalConditions}>Rental Conditions:</h2>
            <div className={css.rentalConditionsGroupOne}>
              <p className={css.minimumAgeParagrah}>
                <span className={css.spanMinimumAgeDesc}>
                  Minimum age :&nbsp;
                </span>
                <span className={css.spanMinimumAgeValue}>{minimumAge}</span>
              </p>
              <p className={css.rentalConditionTwo}>
                <span className={css.spanRentalConditionTwo}>
                  {rentalConditionTwo}
                </span>
              </p>
            </div>
            <div className={css.rentalConditionsGroupTwo}>
              <p className={css.rentalConditionThree}>
                <span className={css.spanRentalConditionThree}>
                  {rentalConditionThree}
                </span>
              </p>
              <p className={css.mileAge}>
                <span className={css.spanMileageDesc}>Mileage:&nbsp;</span>
                <span className={css.spanMileageValue}>
                  {convertMileAge(mileAge)}
                </span>
              </p>
              <p className={css.price}>
                <span className={css.spanPriceDesc}>Price:&nbsp;</span>
                <span className={css.spanPriceValue}>
                  {changePrice(rentalPrice)}
                </span>
              </p>
            </div>
            <a className={css.telRef} href="tel:+380730000000">
              Rental car
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default DetailedInformation;
