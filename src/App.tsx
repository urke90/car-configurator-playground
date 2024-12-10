import Header from '@/components/layout/Header';

import CompletionPage from '@/components/pages/CompletionPage';
import classes from './App.module.scss';

// ----------------------------------------------------------------

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.app__main}>
        {/* <LandingPage /> */}
        <CompletionPage />
      </main>
    </div>
  );
};

export default App;
