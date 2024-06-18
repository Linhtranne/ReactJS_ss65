import { createStore } from "redux";

// Mảng products
const products = [
  {
    id: 1,
    productName: "Sản phẩm A",
    price: 100000,
    quantity: 10,
  },
  {
    id: 2,
    productName: "Sản phẩm B",
    price: 250000,
    quantity: 5,
  },
  {
    id: 3,
    productName: "Sản phẩm C",
    price: 500000,
    quantity: 2,
  },
];

function reducer(state = products) {
  return state;
}

let store = createStore(reducer);

export default function Bt3() {
  return (
    <div>
      <h1>Bt3</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th rowSpan={2}>chức năng</th>
          </tr>
        </thead>
        <tbody>
          {store.getState().map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button>sửa</button>
              </td>
              <td>
                <button>xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}