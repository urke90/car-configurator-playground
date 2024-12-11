import Header from '@/components/layout/Header';
import { EWizzardPage } from '@/lib/constants';
import { useState } from 'react';

import CompletionPage from '@/pages/CompletionPage';
import ConfiguratorPage from '@/pages/ConfiguratorPage';
import LandingPage from '@/pages/LandingPage';
import OverviewPage from '@/pages/OverviewPage';
import classes from './App.module.scss';

// ----------------------------------------------------------------

const App: React.FC = () => {
  const [page, setPage] = useState(EWizzardPage.LANDING_PAGE);

  const handleChangePage = (page: EWizzardPage) => {
    setPage(page);
  };

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.app__main}>
        {page === EWizzardPage.LANDING_PAGE && <LandingPage onChangePage={handleChangePage} />}
        {page === EWizzardPage.CONFIGURATOR_PAGE && <ConfiguratorPage />}
        {page === EWizzardPage.OVERVIEW_PAGE && <OverviewPage />}
        {page === EWizzardPage.COMPLETION_PAGE && <CompletionPage />}
      </main>
    </div>
  );
};

export default App;
