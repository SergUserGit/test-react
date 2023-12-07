import React, { useState, useEffect } from "react";
import AutoCatalogList from "../AutoCatalogListLikes/AutoCatalogListLikes";
import css from "./LikesList.module.css";

const LikesList = () => {
  const [autoCatalog, SetAutoCatalog] = useState([]);

  useEffect(() => {
    const arrayLikeCard =
      JSON.parse(localStorage.getItem("arrayCardItemAuto")) ?? [];
    SetAutoCatalog((state) => arrayLikeCard);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "29px",
        paddingBottom: "24px",
      }}
    >
      <h1 className={css.mainHead}>Favorites auto</h1>
      <AutoCatalogList autoCatalogList={autoCatalog} />
    </div>
  );
};
export default LikesList;
