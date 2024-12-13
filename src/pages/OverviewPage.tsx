import { formatPrice } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

import classes from './Overview.module.scss';

// ----------------------------------------------------------------

const OverviewPage = () => {
  const { getValues } = useFormContext();

  const data = {
    carModel: 'Peugeot',
    services: ['Zamjena ulja i filtera', 'Servis klima uređaja'],
    price: 105.0,
    totalDiscount: 21.0,
    discount: {
      id: '1',
      code: 'Kupon123',
      amount: 20,
      type: 'percentage',
    },
    user: {
      name: 'John Doe',
      phone: '091 123 4567',
      email: 'john.doe@mail.com',
      note: 'Kod auta se prilikom prelaska preko rupa čuje lupanje pa bi i to trebalo pogledati',
    },
  };

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
          <div className={classes['overview__details-section']} style={{ paddingTop: '20px' }}>
            <h4 className={classes['overview__details-title']}>Model vozila</h4>
            <h5 className={classes['overview__details-text']}>{data.carModel}</h5>
          </div>
          <div className={classes['overview__details-section']} style={{ paddingTop: '15px' }}>
            <h4 className={classes['overview__details-title']}>Odabrane usluge</h4>
            <div className={classes['overview__details-row']}>
              <h5 className={classes['overview__details-text']}>Zamjena ulja i filtera</h5>
              <h5 className={classes['overview__details-text']}>65,00 €</h5>
            </div>
            {data.discount.id && (
              <div className={classes['overview__details-price-wrapper']}>
                <h5 className={classes['overview__details-text']}>
                  Popust {data.discount.amount}
                  {data.discount.type === 'percentage' ? '%' : '€'}{' '}
                </h5>
                <h5 className={classes['overview__details-text']}>
                  -{formatPrice(data.totalDiscount)}
                </h5>
              </div>
            )}
            <div className={classes['overview__details-price-wrapper']}>
              <h5 className={classes['overview__details-text']}>Ukupno:</h5>
              <h5 className={classes['overview__details-text']}>{formatPrice(data.price)}</h5>
            </div>
          </div>
          {/* <div className={classes['overview__details-section']} style={{ paddingTop: '15px', paddingBottom: '20px' }}>
            <h4 className={classes['overview__details-title']}>Kontakt podaci</h4>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OverviewPage;
