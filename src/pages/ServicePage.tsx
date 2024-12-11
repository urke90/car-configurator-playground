import RadioButton from '@/components/ui/RadioButton';
import { CAR_MODELS } from '@/lib/constants';
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
          {CAR_MODELS.map(({ id, label, value }) => (
            <div key={id} style={{ minWidth: '166px' }}>
              <RadioButton label={label} value={value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
