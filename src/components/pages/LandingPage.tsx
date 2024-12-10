import classes from './LandingCompletionPage.module.scss';

import ToolsIcon from '../icons/Tools';
import Button from '../ui/Button';

// ----------------------------------------------------------------

const LandingPage: React.FC = () => {
  return (
    <section className={classes.page}>
      <div className={classes.page__container}>
        <div className={classes.page__image}>
          <ToolsIcon />
        </div>
        <h2 className={classes.page__title}>Konfigurator Servisa</h2>
        <h4 className={classes.page__text}>
          Pošaljite upit za servis svog vozila pomoću našeg konfiguratora i naš stručan tim će vam
          se javiti u najkraćem mogućem roku.
        </h4>
        <div className={classes.page__button}>
          <Button className="btn--small">Pokreni konfigurator</Button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
