import CheckmarkIcon from '@/components/icons/Checkmark';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import RadioButton from '@/components/ui/RadioButton';
import Textarea from '@/components/ui/Textarea';
import { CAR_MODELS, CAR_SERVICE } from '@/lib/constants';
import { useRef, useState } from 'react';

import classes from './ServicePage.module.scss';

// ----------------------------------------------------------------

interface IServicePageProps {}

// 1. add text for cupon
// 2. save text for cupon, render the badge,
// 3. on button icon for badge remove cupon and remove badge, and toggle discountInput not to be visible
// 4. save action to the form state

const ServicePage: React.FC<IServicePageProps> = (props) => {
  const [showDiscountInput, setShowDiscountInput] = useState(true);
  const discountInputRef = useRef<HTMLInputElement | null>(null);

  // const { formState, getValues } = useFormContext();

  const handleToggleDiscountInput = (show: boolean) => {
    setShowDiscountInput(show);
  };

  const handleAddDicount = () => {
    console.log('discountInputRef', discountInputRef);
  };

  return (
    <section className={classes.service}>
      <h2 className={classes.service__title}>Konfigurator Servisa</h2>
      <div className={`${classes.service__section}`}>
        <h4 className={classes['service__section-title']}>Odaberite proizvođača vašeg vozila</h4>
        <div className={classes['service__inputs-wrapper']}>
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
        <div className={classes['service__inputs-wrapper']}>
          {CAR_SERVICE.map(({ id, label, value, name, price }) => (
            <div key={id} className={classes['service__service']}>
              <Checkbox label={label} value={value} name={name} />
              <span className={classes['service__service-price']}>({price}€)</span>
            </div>
          ))}
        </div>
        <div className={classes.service__discount}>
          <p className={classes['service__discount-text']}>ukupno: </p>
          <div>
            {showDiscountInput ? (
              <>
                <div className={classes['service__discount-action']}>
                  <Input
                    ref={discountInputRef}
                    style={{ width: '156px', height: 'auto' }}
                    label=""
                  />
                  <Button type="button" className="btn--icon" onClick={handleAddDicount}>
                    <CheckmarkIcon />
                  </Button>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <Badge label="Kupon123" />
                </div>
              </>
            ) : (
              <Button className="btn--link" onClick={() => handleToggleDiscountInput(true)}>
                Imam kupon
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className={classes.service__section}>
        <h4 className={classes['service__section-title']}>Vaši podaci</h4>
        <div className={classes['service__user-inputs']}>
          <div className={classes['service__user-inputs-row']}>
            <Input label="Ime i prezime" />
            <Input label="Broj telefona" />
          </div>
          <Input type="email" label="Email adresa" />
          <Textarea label="Napomena (opcionalno)" />
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
