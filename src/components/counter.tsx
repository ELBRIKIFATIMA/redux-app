import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { increment, decrement,incrementByAmount } from '../state/counter/counterSlice';

const Counter: React.FC = () => {
    const count =  useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();
   
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>dispatch(incrementByAmount(2))}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
           
        </div>
    );
};

export default Counter;