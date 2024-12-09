import Header from '@/components/layout/Header';
import Checkbox from '@/components/ui/Checkbox';

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
        <Checkbox isError disabled label="Checkbox text" />
      </div>
    </div>
  );
}

export default App;
