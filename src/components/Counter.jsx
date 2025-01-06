import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementByAmount, increment, incrementByAmount } from '../redux/features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const handleIncrement5 = (number) => {
    dispatch(incrementByAmount(number)); //
  }

  const handleDecrement5 = (number) => {
    if (count > 0) {
      dispatch(decrementByAmount(number)); //
    }
  }

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <button
          onClick={handleIncrement}
          className="bg-green-500 px-3 py-[6px] rounded-md mr-3"
        >
          +
        </button>
        {count}
        <button onClick={handleDecrement} className="bg-green-500 px-3 py-[6px] rounded-md ml-3">
          -
        </button>
        <button onClick={() => handleIncrement5(5)} className="bg-green-500 px-3 py-[6px] rounded-md ml-3">
          5 Increment
        </button>
        <button onClick={() => handleDecrement5(5)} className="bg-green-500 px-3 py-[6px] rounded-md ml-3">
          5 Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
