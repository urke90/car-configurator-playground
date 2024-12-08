import Button from './components/ui/Button';

function App() {
  return (
    <div>
      <h1 className="h1-regular">Konfigurator servisa</h1>
      <div
        style={{
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button className="btn--secondary btn--small">Text</Button>
      </div>
      {/* <br />
      <br />
      <Button className="btn btn--tertiary">This is tertiary button</Button> */}
    </div>
  );
}

export default App;
