import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";

const Home = lazy(() => import("./components/Home/Home"));
const AutoCatalog = lazy(() => import("./components/AutoCatalog/AutoCatalog"));

function App() {
  return (
    <div>
      <nav className={css.navLink}>
        <NavLink className={css.link} id={"linkHome"} to="/" end>
          Home
        </NavLink>
        <NavLink className={css.link} id={"linkAutoCatalog"} to="/catalog">
          Catalog
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="catalog" element={<AutoCatalog />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
