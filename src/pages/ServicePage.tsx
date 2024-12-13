import CheckmarkIcon from '@/components/icons/Checkmark';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import RadioButton from '@/components/ui/RadioButton';
import Textarea from '@/components/ui/Textarea';
import { CAR_MODELS, CAR_SERVICES, DISCOUNTS } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';
import type { IServiceSchema } from '@/lib/validation';
import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import classes from './ServicePage.module.scss';

// ----------------------------------------------------------------

interface IServicePageProps {
  onValidateAndNavigate: () => void;
}

const ServicePage: React.FC<IServicePageProps> = ({ onValidateAndNavigate }) => {
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

  const selectedServices = watch('services');
  const price = watch('price');
  const discount = watch('discount');

  const appliedDiscount = useMemo(() => DISCOUNTS.find((d) => d.id === discount.id), [discount.id]);

  const handleToggleDiscountInput = (show: boolean) => {
    setShowDiscountInput(show);
  };

  const handleAddDicount = async () => {
    const isValid = await trigger('discount.code');
    if (!isValid) return;

    const discountCode = getValues('discount').code;

    const foundDiscount = DISCOUNTS.find((d) => d.value === discountCode);

    if (!foundDiscount) {
      setError('discount.code', { message: 'Pogresan kupon.' });
    } else {
      setValue('discount', { ...foundDiscount });
    }
  };

  const handleRemoveDiscount = (discountId: string) => {
    if (discountId === discount.id) {
      setValue('discount', { id: '', code: '', amount: 0, type: undefined });
    }
  };

  useEffect(() => {
    const price = CAR_SERVICES.filter((service) => selectedServices.includes(service.value)).reduce(
      (acc, item) => (acc += item.price),
      0
    );

    if (discount && discount.amount) {
      let discountedPrice = 0;
      let totalDiscount = 0;
      if (discount.type === 'amount') {
        totalDiscount = discount.amount;
        discountedPrice = price - discount.amount;
        setValue('totalDiscount', totalDiscount);
        setValue('price', discountedPrice);
      } else {
        totalDiscount = (price * discount.amount) / 100;
        discountedPrice = price - (price * discount.amount) / 100;
        setValue('totalDiscount', totalDiscount);
        setValue('price', discountedPrice);
      }
    } else {
      setValue('price', price);
    }
  }, [selectedServices, discount, setValue]);

  return (
    <section className={classes.service}>
      <h2 className={classes.service__title}>Konfigurator Servisa</h2>
      <div className={`${classes.service__section}`}>
        <h4 className={classes['service__section-title']}>Odaberite proizvođača vašeg vozila</h4>
        <div className={classes['service__inputs-wrapper']}>
          {CAR_MODELS.map(({ id, label, value }) => (
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
        {errors.carModel?.message && (
          <p className={classes['service__section-message--error']}>{errors.carModel.message}</p>
        )}
      </div>
      <div className={`${classes.service__section}`}>
        <h4 className={classes['service__section-title']}>
          Odaberite jednu ili više usluga koju trebate
        </h4>
        <div className={classes['service__inputs-wrapper']}>
          {CAR_SERVICES.map(({ id, label, price, value }) => (
            <div key={id} className={classes['service__service']}>
              <Checkbox
                {...register('services')}
                label={label}
                value={value}
                isError={!!errors.services?.message}
              />
              <span className={classes['service__service-price']}>({price}€)</span>
            </div>
          ))}
        </div>
        {errors.services?.message && (
          <p className={classes['service__section-message--error']}>{errors.services.message}</p>
        )}
        <div className={classes.service__discount}>
          <p className={classes['service__discount-text']}>
            ukupno: <span className={classes['service__discount-price']}>{formatPrice(price)}</span>
          </p>
          <div>
            {showDiscountInput ? (
              <>
                <div className={classes['service__discount-action']}>
                  <Input
                    style={{ width: '156px', height: 'auto' }}
                    label=""
                    {...register('discount.code')}
                    errorText={errors.discount?.code?.message}
                  />
                  <Button
                    style={{ alignSelf: 'baseline' }}
                    type="button"
                    className="btn--icon"
                    onClick={handleAddDicount}
                    disabled={selectedServices.length === 0 || !!appliedDiscount}
                  >
                    <CheckmarkIcon />
                  </Button>
                </div>
                {appliedDiscount?.id ? (
                  <div style={{ marginTop: '10px' }}>
                    <Badge
                      label={appliedDiscount.label}
                      onClick={() => handleRemoveDiscount(appliedDiscount.id)}
                    />
                  </div>
                ) : null}
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
            <Input
              label="Ime i prezime"
              {...register('user.name')}
              errorText={errors.user?.name?.message ? errors.user.name.message : ''}
            />
            <Input
              label="Broj telefona"
              {...register('user.phone')}
              errorText={errors.user?.phone?.message ? errors.user.phone.message : ''}
            />
          </div>
          <Input
            type="email"
            label="Email adresa"
            {...register('user.email')}
            errorText={errors.user?.email?.message ? errors.user.email.message : ''}
          />
          <Textarea
            label="Napomena (opcionalno)"
            {...register('user.note')}
            errorText={errors.user?.note?.message ? errors.user.note.message : ''}
          />
        </div>
      </div>
      <div className={classes.service__section}>
        <Button type="button" className="btn--small" onClick={() => onValidateAndNavigate()}>
          Dalje
        </Button>
      </div>
    </section>
  );
};

export default ServicePage;
