import Header from '@/components/layout/Header';

import RadioButton from '@/components/ui/RadioButton';
import classes from './App.module.scss';

// ----------------------------------------------------------------

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.app__main}>
        {/* <LandingPage /> */}
        {/* <CompletionPage /> */}
        <div
          style={{
            border: '1px solid blue',
            display: 'flex',
            justifyContent: 'center',
            margin: '50px',
          }}
        >
          <RadioButton label="Radio button text" />
        </div>
      </main>
    </div>
  );
};

export default App;
