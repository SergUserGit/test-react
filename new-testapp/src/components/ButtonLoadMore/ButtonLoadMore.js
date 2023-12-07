import css from "./ButtonLoadMore.module.css";

const ButtonLoadMore = ({ onClickLoadeMoreBtn }) => {
  const loadClick = () => {
    onClickLoadeMoreBtn();
  };

  return (
    <button className={css.buttonLoadeMore} onClick={loadClick}>
      Load more
    </button>
  );
};

export default ButtonLoadMore;
