import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount } from '../redux/counterSlicec';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
