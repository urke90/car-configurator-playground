import { formatPrice } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

import Button from '@/components/ui/Button';
import { CAR_SERVICES, EWizzardPage } from '@/lib/constants';
import classes from './Overview.module.scss';

// ----------------------------------------------------------------

interface IOverviewPage {
  // eslint-disable-next-line no-unused-vars
  onChangePage: (page: EWizzardPage) => void;
}

const OverviewPage: React.FC<IOverviewPage> = ({ onChangePage }) => {
  const { getValues } = useFormContext();

  // const data = {
  //   carModel: 'Peugeot',
  //   services: ['Zamjena ulja i filtera', 'Servis klima uređaja'],
  //   price: 105.0,
  //   totalDiscount: 21.0,
  //   discount: {
  //     id: '1',
  //     code: 'Kupon123',
  //     amount: 20,
  //     type: 'percentage',
  //   },
  //   user: {
  //     name: 'John Doe',
  //     phone: '091 123 4567',
  //     email: 'john.doe@mail.com',
  //     note: 'Kod auta se prilikom prelaska preko rupa čuje lupanje pa bi i to trebalo pogledati',
  //   },
  // };

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
          <div className={classes['overview__details-section']} style={{ paddingTop: '20px' }}>
            <h4 className={classes['overview__details-title']}>Model vozila</h4>
            <h5 className={classes['overview__details-text']}>{data.carModel}</h5>
          </div>
          <div className={classes['overview__details-section']} style={{ paddingTop: '15px' }}>
            <h4 className={classes['overview__details-title']}>Odabrane usluge</h4>
            {CAR_SERVICES.filter((service) => data.services.includes(service.value)).map(
              ({ id, label, price }) => (
                <ServiceDetailsRow key={id} label={label} price={price} />
              )
            )}
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
              <h5 className={classes['overview__details-text']}>
                <span className={classes['overview__details-text--primary']}>
                  {formatPrice(data.price)}
                </span>{' '}
              </h5>
            </div>
          </div>
          <div
            className={classes['overview__details-section']}
            style={{ paddingTop: '15px', paddingBottom: '20px' }}
          >
            <h4 className={classes['overview__details-title']}>Kontakt podaci</h4>
            <UserDataRow label="Ime i prezime:" value={data.user.name} />
            <UserDataRow label="Email adresa:" value={data.user.email} />
            <UserDataRow label="Broj telefona:" value={data.user.phone} />
            <UserDataRow label="Napomena:" value={data.user.note} />
          </div>
        </div>
      </div>
      <div className={classes['overview__actions']}>
        <Button
          type="button"
          className="btn--secondary"
          onClick={() => onChangePage(EWizzardPage.CONFIGURATOR_PAGE)}
        >
          Nazad
        </Button>
        <Button type="submit" style={{ width: '100%' }} className="btn--small">
          Pošalji
        </Button>
      </div>
    </section>
  );
};

interface IServiceDetailsRow {
  label: string;
  price: number;
}

const ServiceDetailsRow: React.FC<IServiceDetailsRow> = ({ label, price }) => {
  return (
    <div className={classes['overview__details-row']}>
      <h5 className={classes['overview__details-text']}>{label}</h5>
      <h5 className={classes['overview__details-text']}>{formatPrice(price)}</h5>
    </div>
  );
};

interface IUserDataRow {
  label: string;
  value: string;
}

const UserDataRow: React.FC<IUserDataRow> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className={classes['overview__details-user-row']}>
      <h5 style={{ alignSelf: 'baseline' }} className={classes['overview__details-text--base-200']}>
        {label}
      </h5>
      <h5 className={classes['overview__details-text']}>{value}</h5>
    </div>
  );
};

export default OverviewPage;
