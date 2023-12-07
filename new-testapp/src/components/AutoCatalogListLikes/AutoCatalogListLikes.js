import css from "./AutoCatalogListLikes.module.css";
import AutoCatalogItem from "../AutoCatalogListLikesItem/AutoCatalogListLikesItem";

const AutoCatalogListLikes = function ({ autoCatalogList }) {
  return (
    <ul className={css.AutoCatalogList}>
      {autoCatalogList.map(
        ({
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
        }) => (
          <AutoCatalogItem
            key={idAuto}
            make={make}
            model={model}
            year={year}
            rentalPrice={rentalPrice}
            adressCity={adressCity}
            adressCountry={adressCountry}
            rentalCompany={rentalCompany}
            type={type}
            idAuto={idAuto}
            functionalities={functionalities}
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
            imgAuto={imgAuto}
          />
        )
      )}
    </ul>
  );
};

export default AutoCatalogListLikes;
