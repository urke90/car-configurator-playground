import classes from './LandingPage.module.scss';

import ToolsIcon from '../icons/Tools';
import Button from '../ui/Button';

// ----------------------------------------------------------------

const LandingPage: React.FC = () => {
  return (
    <section className={classes.home}>
      <div className={classes.home__container}>
        <div className={classes.home__image}>
          <ToolsIcon />
        </div>
        <h2 className={classes.home__title}>Konfigurator Servisa</h2>
        <h4 className={classes.home__text}>
          Pošaljite upit za servis svog vozila pomoću našeg konfiguratora i naš stručan tim će vam
          se javiti u najkraćem mogućem roku.
        </h4>
        <div className={classes.home__button}>
          <Button className="btn--small">Pokreni konfigurator</Button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
