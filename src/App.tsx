import Header from '@/components/layout/Header';

import Input from '@/components/ui/Input';

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
        <Input label="Name" errorMessage="Error Message" />
      </div>
    </div>
  );
}

export default App;
