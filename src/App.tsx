import { FormProvider, useForm } from 'react-hook-form';

import Header from '@/components/layout/Header';
import { EWizzardPage } from '@/lib/constants';
import { useState } from 'react';

import CompletionPage from '@/pages/CompletionPage';
import LandingPage from '@/pages/LandingPage';
import OverviewPage from '@/pages/OverviewPage';
import ConfiguratorPage from '@/pages/ServicePage';

import classes from './App.module.scss';

// ----------------------------------------------------------------

interface IFormState {
  carModel: string;
  service: string[];
  price: number;
  totalPrice: number;
  discountCode: string;
  discountValue: number;
  user: {
    name: string;
    phone: string;
    email: string;
    note: string;
  };
}

const App: React.FC = () => {
  const [page, setPage] = useState(EWizzardPage.CONFIGURATOR_PAGE);

  const methods = useForm<IFormState>({
    defaultValues: {
      carModel: '',
      service: [],
      price: 0,
      totalPrice: 0,
      discountCode: '',
      discountValue: 0,
      user: {
        name: '',
        phone: '',
        email: '',
        note: '',
      },
    },
  });

  // console.log('errors', errors);

  console.log('watch form', methods.watch());

  const handleChangePage = (page: EWizzardPage) => {
    setPage(page);
  };

  const onSubmit = (data: IFormState) => {
    console.log('data', data);
  };

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.app__main}>
        {page === EWizzardPage.LANDING_PAGE && <LandingPage onChangePage={handleChangePage} />}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {page === EWizzardPage.CONFIGURATOR_PAGE && <ConfiguratorPage />}
            {page === EWizzardPage.OVERVIEW_PAGE && <OverviewPage />}
          </form>
        </FormProvider>
        {page === EWizzardPage.COMPLETION_PAGE && <CompletionPage />}
      </main>
    </div>
  );
};

export default App;
