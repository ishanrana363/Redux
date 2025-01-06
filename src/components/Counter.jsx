import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    if(count>0){
      dispatch(decrement());
    }
  };

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
      </div>
    </div>
  );
};

export default Counter;
