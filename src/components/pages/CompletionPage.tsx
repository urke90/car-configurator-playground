import SuccessIcon from '../icons/Success';
import classes from './LandingPage.module.scss';

// ----------------------------------------------------------------

const CompletionPage = () => {
  return (
    <section className={classes.home}>
      <div className={classes.home__container}>
        <div className={classes.home__image}>
          <SuccessIcon />
        </div>
        <h2 className={classes.home__title}>Vaša prijava je uspešno poslana</h2>
        <h4 className={classes.home__text}>
          Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u najkraćem mogućem
          roku. <br />
          Hvala vam!
        </h4>
      </div>
    </section>
  );
};

export default CompletionPage;
