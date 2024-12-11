import Checkbox from '@/components/ui/Checkbox';
import RadioButton from '@/components/ui/RadioButton';
import { CAR_MODELS, CAR_SERVICE } from '@/lib/constants';
import classes from './ServicePage.module.scss';

// ----------------------------------------------------------------

interface IServicePageProps {}

const ServicePage: React.FC<IServicePageProps> = (props) => {
  return (
    <section className={classes.service}>
      <h2 className={classes.service__title}>Konfigurator Servisa</h2>
      <div className={`${classes.service__section}`}>
        <h4 className={classes['service__section-title']}>Odaberite proizvođača vašeg vozila</h4>
        <div className={classes['service__car-models']}>
          {CAR_MODELS.map(({ id, label, value, name }) => (
            <div key={id} style={{ minWidth: '166px' }}>
              <RadioButton label={label} value={value} name={name} />
            </div>
          ))}
        </div>
      </div>
      <div className={`${classes.service__section}`}>
        <h4 className={classes['service__section-title']}>
          Odaberite jednu ili više usluga koju trebate
        </h4>
        {/* * CHANGE THIS classes to be used for car-service and car-models */}
        <div className={classes['service__car-models']}>
          {CAR_SERVICE.map(({ id, label, value, name }) => (
            <div key={id} style={{ minWidth: '255px' }}>
              <Checkbox label={label} value={value} name={name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
