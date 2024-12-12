import CheckmarkIcon from '@/components/icons/Checkmark';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import RadioButton from '@/components/ui/RadioButton';
import Textarea from '@/components/ui/Textarea';
import { CAR_MODELS, CAR_SERVICE, DISCOUNTS } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';

import { useFormContext } from 'react-hook-form';
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
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [c, setC] = useState<unknown>();

  const { formState, getValues, watch, register } = useFormContext();

  // useEffect(() => {
  //   console.log('cccccccccccccccccccccccccccccccccccccccc', c);
  // }, [c]);

  const watchedModel = watch('carModel');
  const carModel = getValues('carModel');

  useEffect(() => {
    console.log('carModel', carModel);
    console.log('watchedModel', watchedModel);
  }, [watchedModel, carModel]);

  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', watch());

  const handleToggleDiscountInput = (show: boolean) => {
    setShowDiscountInput(show);
  };

  const handleAddDicount = () => {
    if (!discountInputRef.current) {
      console.error('Discount input element is not found!');
      return;
    }
    const discountInputValue = discountInputRef.current.value;

    const discount = DISCOUNTS.find((discount) => discount.value === discountInputValue);

    if (!discount) {
      setDiscountError('Invalid discount code. Please try again.');
    } else {
      setDiscountError(null);
    }

    // console.log('discountInputRef', discountInputRef.current?.value);
  };

  return (
    <section className={classes.service}>
      <h2 className={classes.service__title}>Konfigurator Servisa</h2>
      <div className={`${classes.service__section}`}>
        <h4 className={classes['service__section-title']}>Odaberite proizvođača vašeg vozila</h4>
        <div className={classes['service__inputs-wrapper']}>
          {CAR_MODELS.map(({ id, label, value, name }) => (
            <div key={id} style={{ minWidth: '166px' }}>
              <RadioButton
                label={label}
                value={value}
                // name={name}
                {...register('carModel')}
                onChange={(e) => setC(e.target.checked)}
              />
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
              <Checkbox {...register('carModle')} label={label} value={value} name={name} />
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
                    label={discountError ? discountError : ''}
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
      <div className={classes.service__section}>
        <Button type="submit" className="btn--small">
          Dalje
        </Button>
      </div>
    </section>
  );
};

export default ServicePage;
