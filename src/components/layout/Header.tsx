import classes from './Header.module.scss';

// ----------------------------------------------------------------

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <header className={classes.header__container}>
        <h2 className={classes.header__title}>Konfigurator servisa</h2>
        <p className={classes.header__text}>Izracunajte trosak servisa</p>
      </header>
    </div>
  );
};

export default Header;
