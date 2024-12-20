/* eslint-disable no-unused-vars */

export enum EWizzardPage {
  LANDING_PAGE = 'LANDING_PAGE',
  CONFIGURATOR_PAGE = 'CONFIGURATOR_PAGE',
  OVERVIEW_PAGE = 'OVERVIEW_PAGE',
  COMPLETION_PAGE = 'COMPLETION_PAGE',
}

export const CAR_MODELS = [
  {
    id: '1',
    label: 'Peugeot',
    value: 'peugeot',
    name: 'car-model',
  },
  {
    id: '2',
    label: 'Volkswagen',
    value: 'volkswagen',
    name: 'car-model',
  },
  {
    id: '3',
    label: 'Citroen',
    value: 'citroen',
    name: 'car-model',
  },
  {
    id: '4',
    label: 'BMW',
    value: 'bmw',
    name: 'car-model',
  },
  {
    id: '5',
    label: 'Seat',
    value: 'seat',
    name: 'car-model',
  },
];

export const CAR_SERVICES = [
  {
    id: '1',
    label: 'Zamena ulja i filtera',
    value: 'zamena_ulja_i_filtera',
    name: 'car_service',
    price: 65,
  },
  {
    id: '2',
    label: 'Promjena pakni',
    value: 'promena_pakni',
    name: 'car_service',
    price: 60,
  },
  {
    id: '3',
    label: 'Servis klima uređaja',
    value: 'servis_klima',
    name: 'car_service',
    price: 40,
  },
  {
    id: '4',
    label: 'Balansiranje guma',
    value: 'balansiranje_guma',
    name: 'car_service',
    price: 7,
  },
];

interface IDiscount {
  id: string;
  label: string;
  value: string;
  amount: number;
  type: 'amount' | 'percentage';
}

export const DISCOUNTS: IDiscount[] = [
  {
    id: '1',
    label: 'Kupon123',
    value: 'Kupon123',
    amount: 20,
    type: 'percentage',
  },
];
