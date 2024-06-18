import { useState } from "react";
import { createStore } from "redux";
function reducer(state = '1234', action: any) {
  switch (action.type) {
    case "CHANGE":
        state = action.payload;
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

const change = (payload: string) => ({
  type: "CHANGE",
  payload,
});


export default function Bt6() {
  const [count, setCount] = useState(store.getState());
  store.subscribe(() => {
    setCount(store.getState());
  });
  return (
    <div>
      <h1>Bt6</h1>
      <button onClick={() => store.dispatch(change('5678'))}>change</button>
      <p>{count}</p>
    </div>
  );
}