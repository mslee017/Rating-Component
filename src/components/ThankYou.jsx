import React from 'react';

const ThankYou = props => {
  const { number } = props;
  return (
    <main className="p-4 text-center">
      <img
        src="../../assets/illustration-thank-you.svg"
        alt="Thank You"
        className="w-36 h-24 mx-auto mb-6"
      />
      <p className="text-primary-orange mb-6 bg-dark-blue rounded-2xl py-2 w-4/5 mx-auto">
        You selected {number} out of 5
      </p>
      <p className="text-white text-2xl font-semibold mb-2.5">Thank You!</p>
      <p className="leading-6 text-sm">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
};

export default ThankYou;
