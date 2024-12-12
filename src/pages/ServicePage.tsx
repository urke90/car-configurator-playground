import CheckmarkIcon from '@/components/icons/Checkmark';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import RadioButton from '@/components/ui/RadioButton';
import Textarea from '@/components/ui/Textarea';
import { CAR_MODELS, CAR_SERVICE, DISCOUNTS } from '@/lib/constants';
import type { IServiceSchema } from '@/lib/validation';
import { useState } from 'react';

import { useFormContext } from 'react-hook-form';
import classes from './ServicePage.module.scss';

// ----------------------------------------------------------------

interface IServicePageProps {}

const ServicePage: React.FC<IServicePageProps> = (props) => {
  const [showDiscountInput, setShowDiscountInput] = useState(true);

  const {
    formState: { errors },
    getValues,
    watch,
    register,
    trigger,
    setError,
    setValue,
  } = useFormContext<IServiceSchema>();

  const watchedModel = watch('carModel');
  const carModel = getValues('carModel');

  // useEffect(() => {
  //   console.log('carModel', carModel);
  // }, [carModel]);

  // console.log('FORM WATCH', watch());
  console.log('formState ERRORS', errors);

  const handleToggleDiscountInput = (show: boolean) => {
    setShowDiscountInput(show);
  };

  const handleAddDicount = async () => {
    const isValid = await trigger('discount.code');
    if (!isValid) return;

    const discountCode = getValues('discount').code;

    const foundDiscount = DISCOUNTS.find((d) => d.value === discountCode);
    console.log('founc');

    if (!foundDiscount) {
      setError('discount.code', { message: 'Pogresan kupon.' });
    } else {
      setValue('discount', {});
    }
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
                {...register('carModel')}
                isError={!!errors.carModel?.message}
                label={label}
                value={value}
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
              <Checkbox
                {...register('service')}
                label={label}
                value={value}
                isError={!!errors.service?.message}
              />
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
                    style={{ width: '156px', height: 'auto' }}
                    label={''}
                    {...register('discount.code')}
                    errorText={errors.discount?.code?.message}
                  />
                  <Button
                    style={{ alignSelf: 'baseline' }}
                    type="button"
                    className="btn--icon"
                    onClick={handleAddDicount}
                  >
                    <CheckmarkIcon />
                  </Button>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <Badge label="Kupon123" />
                </div>
              </>
            ) : (
              <Button
                type="button"
                className="btn--link"
                onClick={() => handleToggleDiscountInput(true)}
              >
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
            <Input label="Ime i prezime" {...register('user.name')} />
            <Input label="Broj telefona" {...register('user.phone')} />
          </div>
          <Input type="email" label="Email adresa" {...register('user.email')} />
          <Textarea label="Napomena (opcionalno)" {...register('user.note')} />
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
