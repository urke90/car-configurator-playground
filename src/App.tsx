import Header from '@/components/layout/Header';

import LandingPage from '@/components/pages/LandingPage';

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          border: '5px solid blue',
          height: '100%',
          minHeight: 'calc(100vh - 72px)',
        }}
      >
        <LandingPage />
        <LandingPage />
        <LandingPage />
        <LandingPage />
        <LandingPage />
      </main>
    </>
  );
}

export default App;
