import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Header from '@/components/layout/Header';
import { EWizzardPage } from '@/lib/constants';

import CompletionPage from '@/pages/CompletionPage';
import LandingPage from '@/pages/LandingPage';
import OverviewPage from '@/pages/OverviewPage';
import ConfiguratorPage from '@/pages/ServicePage';
import { serviceSchema } from './lib/validation';

import classes from './App.module.scss';

// ----------------------------------------------------------------

interface IFormState {
  carModel: string;
  service: string[];
  price: number;
  discountedPrice: number;
  discount: {
    code: string;
    amount: number;
    type: 'percentage' | 'amount';
  };
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
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      carModel: '',
      service: [],
      price: 0,
      discountedPrice: 0,
      discount: {
        code: '',
        amount: 0,
        type: undefined,
      },
      user: {
        name: '',
        phone: '',
        email: '',
        note: '',
      },
    },
  });

  const handleChangePage = (page: EWizzardPage) => {
    setPage(page);
  };

  const onSubmit = (data: unknown) => {
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
