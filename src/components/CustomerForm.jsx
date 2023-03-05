import React from 'react';
import { useState } from 'react';

const CustomerForm = props => {
  const { nums, number, setNumber, setSubmitted } = props;

  const [currentActive, setCurrentActive] = useState(null);

  const handleButtonClick = index => {
    setCurrentActive(index);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setNumber(currentActive + 1);
    setSubmitted(true);
  };

  console.log(number);

  return (
    <main className="p-4">
      <form action="#" onSubmit={handleSubmit}>
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-dark-blue mb-4">
          <img
            src="../../assets/icon-star.svg"
            alt="Star Icon"
            className="h-[14px] w-[14px]"
          />
        </div>

        <h1 className="text-2xl text-white mb-2.5">How did we do?</h1>
        <p className="text-sm mb-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between mb-6">
          {nums.map((num, index) => {
            return (
              <button
                key={index}
                className={`${
                  currentActive === index ? 'bg-primary-orange' : 'bg-dark-blue'
                } ${
                  currentActive === index ? 'text-white' : null
                }   bg-dark-blue h-[42px] w-[42px] rounded-full hover:bg-light-grey hover:text-white`}
                value={nums[index]}
                onClick={() => handleButtonClick(index)}
                type="button"
              >
                {num}
              </button>
            );
          })}
        </div>
        <button
          type="submit"
          className="w-64 mx-auto bg-primary-orange text-white block rounded-2xl py-2 mb-8 hover:bg-white hover:text-primary-orange "
        >
          SUBMIT
        </button>
      </form>
    </main>
  );
};

export default CustomerForm;
