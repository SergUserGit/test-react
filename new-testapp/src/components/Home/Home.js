import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.mainSection}>
      <h1 className={css.mainHead}>
        Service that provides car rental services in Ukraine
      </h1>
      <h2 className={css.mainServicesHead}>Services that are provided:</h2>
      <ul className={css.servicesList}>
        <li className={css.servicesListItem}>Providing car rental</li>
        <li className={css.servicesListItem}>Rented car repair</li>
        <li className={css.servicesListItem}>
          Telephone consultations on car operation issues
        </li>
      </ul>
    </section>
  );
};
export default Home;
