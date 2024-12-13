import { useFormContext } from 'react-hook-form';

import classes from './Overview.module.scss';

// ----------------------------------------------------------------

const carModelStyles = {
  display: 'flex',
  gap: '5px',
  paddingTop: '20px',
};

const OverviewPage = () => {
  const { getValues } = useFormContext();

  const data = getValues();

  console.log('data U OVERVIEW PAGE-U', data);

  return (
    <section className={classes.overview}>
      <h2 className={classes.overview__title}>Konfigurator Servisa</h2>
      <div className={classes.overview__section}>
        <h4 className={classes['overview__section-title']}>Pregled i potvrda vašeg odabira</h4>
        <p className={classes['overview__section-text']}>
          Molimo vas da još jednom pregledate i potvrdite podatke. Ukoliko želite promijeniti neki
          od podataka, vratite se na prethodni korak. Kada ste provjerili ispravnost svojih
          podataka, za slanje upita na servis pritisnite gumb “Pošalji”.
        </p>
      </div>
      <div className={classes.overview__section}>
        <div className={classes['overview__details']}>
          <div style={carModelStyles}>
            <h4 className={classes['overview__details-title']}>Model vozila</h4>
            <h5 className={classes['overview__details-text']}>{data.carModel}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewPage;
