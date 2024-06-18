
const userData = {
  id: 1,
  userName: "Nguyễn Văn Nam",
  gender: "Nam",
  dateBirth: "20/03/2023",
  address: "Thanh Xuân, Hà Nội",
};
import { createStore } from "redux";
function reducer(state = userData, action: any) {
  switch (action.type) {
    case "RENDER":
      return state;
    default:
      return state;
  }
}

const store = createStore((reducer));

export default function Bt1() {
  return (
    <div>
      <h1>bt1</h1>
        <p>{store.getState().userName}</p>
        <p>{store.getState().gender}</p>
        <p>{store.getState().dateBirth}</p>
        <p>{store.getState().address}</p>
    </div>
  )
}