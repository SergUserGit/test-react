import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from "./App.module.css";

const Home = lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <div>
      <nav className={css.navLink}>
        <NavLink className={css.link} id={"linkHome"} to="/" end>
          Home
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
