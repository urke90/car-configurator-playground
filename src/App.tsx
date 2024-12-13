import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Header from './components/layout/Header';
import { EWizzardPage } from './lib/constants';

import CompletionPage from '@/pages/CompletionPage';
import { type IServiceSchema, serviceSchema } from './lib/validation';
import LandingPage from './pages/LandingPage';
import OverviewPage from './pages/OverviewPage';
import ServicePage from './pages/ServicePage';

import classes from './App.module.scss';

// ----------------------------------------------------------------

const App: React.FC = () => {
  const [page, setPage] = useState(EWizzardPage.OVERVIEW_PAGE);

  const methods = useForm<IServiceSchema>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      carModel: '',
      services: [],
      price: 0,
      totalDiscount: 0,
      discount: {
        id: '',
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

  const handleValidateAndNavigate = async () => {
    const formIsValid = await methods.trigger();

    if (!formIsValid) return;

    handleChangePage(EWizzardPage.OVERVIEW_PAGE);
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
            {page === EWizzardPage.CONFIGURATOR_PAGE && (
              <ServicePage onValidateAndNavigate={handleValidateAndNavigate} />
            )}
            {page === EWizzardPage.OVERVIEW_PAGE && <OverviewPage />}
          </form>
        </FormProvider>
        {page === EWizzardPage.COMPLETION_PAGE && <CompletionPage />}
      </main>
    </div>
  );
};

export default App;
