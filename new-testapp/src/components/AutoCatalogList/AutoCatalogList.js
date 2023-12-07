import css from "./AutoCatalogList.module.css";
import AutoCatalogItem from "../AutoCatalogItem/AutoCatalogItem";

const AutoCatalogList = function ({
  autoCatalogList,
  filter,
  filterPrice,
  filterMilOne,
  filterMilTwo,
}) {
  function getArrayAddres(adress) {
    return adress.split(",");
  }

  function getArrayRentalConditions(rentalConditions) {
    return rentalConditions.split("\n");
  }

  return (
    <ul className={css.AutoCatalogList}>
      {autoCatalogList.map(
        ({
          id,
          make,
          model,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          functionalities,
          fuelConsumption,
          engineSize,
          description,
          accessories,
          rentalConditions,
          mileage,
          img,
        }) => (
          <AutoCatalogItem
            key={id}
            make={make}
            model={model}
            year={year}
            rentalPrice={rentalPrice}
            adressCity={getArrayAddres(address)[1].trim()}
            adressCountry={getArrayAddres(address)[2].trim()}
            rentalCompany={rentalCompany}
            type={type}
            idAuto={id}
            functionalities={functionalities[0]}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accesOne={accessories[0]}
            accesTwo={accessories[1]}
            functionalOne={functionalities[0]}
            accesThree={accessories[2]}
            functionalTwo={functionalities[1]}
            functionalThree={functionalities[2]}
            minimumAge={parseFloat(
              getArrayRentalConditions(rentalConditions)[0]
                .replace("Minimum age:", "")
                .trim()
            )}
            rentalConditionTwo={getArrayRentalConditions(rentalConditions)[1]}
            rentalConditionThree={getArrayRentalConditions(rentalConditions)[2]}
            mileAge={mileage}
            imgAuto={img}
            autoFilter={filter}
            autoFilterPrice={filterPrice}
            autoFilterMilOne={filterMilOne}
            autoFilterMilTwo={filterMilTwo}
          />
        )
      )}
    </ul>
  );
};

export default AutoCatalogList;
