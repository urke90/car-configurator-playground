import CheckmarkIcon from '@/components/icons/Checkmark';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import RadioButton from '@/components/ui/RadioButton';
import { CAR_MODELS, CAR_SERVICE } from '@/lib/constants';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Badge from '@/components/ui/Badge';
import classes from './ServicePage.module.scss';

// ----------------------------------------------------------------

interface IServicePageProps {}

const ServicePage: React.FC<IServicePageProps> = (props) => {
  const [showDiscountInput, setShowDiscountInput] = useState(true);

  const handleToggleDiscountInput = (show: boolean) => {
    setShowDiscountInput(show);
  };

  const { formState, getValues } = useFormContext();

  console.log('classes', formState);

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
          {CAR_SERVICE.map(({ id, label, value, name, price }) => (
            <div key={id} style={{ minWidth: '255px' }}>
              <Checkbox label={`${label} (${price}€)`} value={value} name={name} />
            </div>
          ))}
        </div>
        <div className={classes.service__discount}>
          <p className={classes['service__discount-text']}>ukupno: </p>
          <div className={classes['service__discount-action']}>
            {showDiscountInput ? (
              <>
                <Input style={{ width: '156px' }} label="" />
                <Button className="btn--icon">
                  <CheckmarkIcon />
                </Button>
              </>
            ) : (
              <Button className="btn--link" onClick={() => handleToggleDiscountInput(true)}>
                Imam kupon
              </Button>
            )}
          </div>
        </div>
      </div>
      <Badge label="123123" />
    </section>
  );
};

export default ServicePage;
