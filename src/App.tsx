import Header from '@/components/layout/Header';
import LandingPage from '@/components/pages/LandingPage';

import classes from './App.module.scss';

// ----------------------------------------------------------------

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.app__main}>
        <LandingPage />
      </main>
    </div>
  );
};

export default App;
