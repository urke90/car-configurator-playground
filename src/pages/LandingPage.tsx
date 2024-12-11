import classes from './LandingCompletionPage.module.scss';

import ToolsIcon from '@/components/icons/Tools';
import Button from '@/components/ui/Button';
import { EWizzardPage } from '@/lib/constants';

// ----------------------------------------------------------------

interface ILandingPage {
  // eslint-disable-next-line no-unused-vars
  onChangePage: (page: EWizzardPage) => void;
}

const LandingPage: React.FC<ILandingPage> = ({ onChangePage }) => {
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
          <Button
            onClick={() => onChangePage(EWizzardPage.CONFIGURATOR_PAGE)}
            className="btn--small"
          >
            Pokreni konfigurator
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
