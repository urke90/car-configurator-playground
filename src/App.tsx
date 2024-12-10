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
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '50px',
        }}
      >
        <Input disabled placeholder="Enter name" label="Name" errorMessage={''} />
      </div>
    </div>
  );
}

export default App;
