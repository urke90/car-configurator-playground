import Header from '@/components/layout/Header';

function App() {
  return (
    <div>
      <Header />

      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          justifyContent: 'center',
          margin: '50px',
        }}
      >
        <h4>Konfigurator servisa</h4>
      </div>
    </div>
  );
}

export default App;
