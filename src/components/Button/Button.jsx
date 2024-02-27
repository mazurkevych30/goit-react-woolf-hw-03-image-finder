import css from './Button.module.css';

const Button = ({ handleLoadMore }) => {
  return (
    <button type="button" className={css.Button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default Button;
