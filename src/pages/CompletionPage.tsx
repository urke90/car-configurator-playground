import SuccessIcon from '@/components/icons/Success';

import classes from './LandingCompletionPage.module.scss';

// ----------------------------------------------------------------

const CompletionPage: React.FC = () => {
  return (
    <section className={classes.page}>
      <div className={classes.page__container}>
        <div className={classes.page__image}>
          <SuccessIcon />
        </div>
        <h2 className={classes.page__title}>Vaša prijava je uspešno poslana</h2>
        <h4 className={classes.page__text}>
          Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u najkraćem mogućem
          roku. <br />
          Hvala vam!
        </h4>
      </div>
    </section>
  );
};

export default CompletionPage;
