import { useState } from "react";
import { createStore } from "redux";
function reducer(state = 0, action: any) {
  switch (action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREASE":
      return state - action.payload;
    default:
      return state;
  }
}

const store = createStore(reducer);

const increase = (payload: number) => ({
  type: "INCREASE",
  payload,
});
const decrease = (payload: number) => ({
  type: "DECREASE",
  payload,
});

export default function Bt4() {
  const [count, setCount] = useState(store.getState());
  store.subscribe(() => {
    setCount(store.getState());
  });
  return (
    <div>
      <h1>Bt4</h1>
      <button onClick={() => store.dispatch(increase(1))}>increase</button>
      <button onClick={() => store.dispatch(decrease(1))}>decrease</button>
      <p>{count}</p>
    </div>
  );
}