import Header from '@/components/layout/Header';

import classes from './App.module.scss';
import LandingPage from './components/pages/LandingPage';

// ----------------------------------------------------------------

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.app__main}>
        <LandingPage />
        {/* <CompletionPage /> */}
      </main>
    </div>
  );
};

export default App;
