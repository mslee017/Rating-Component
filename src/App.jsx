import { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import ThankYou from './components/ThankYou';

function App() {
  const nums = [1, 2, 3, 4, 5];

  const [number, setNumber] = useState(undefined);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-xs h-[360px] bg-faded-black mx-auto rounded-2xl mt-40 wrapper md:max-w-lg md:px-10">
      {submitted ? (
        <ThankYou number={number} />
      ) : (
        <CustomerForm
          nums={nums}
          number={number}
          setNumber={setNumber}
          setSubmitted={setSubmitted}
        />
      )}
    </div>
  );
}

export default App;
