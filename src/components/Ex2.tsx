import { createStore } from "redux";

const users = [
  {
    id: 1,
    userName: "nguyen van  A",
    gender: "Nam",
    dateBirth: "2000-01-15",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "tran thi B",
    gender: "Nữ",
    dateBirth: "1995-05-20",
    address: "Hồ Chí Minh",
  },
  {
    id: 3,
    userName: "phamvanC",
    gender: "Nam",
    dateBirth: "1998-12-10",
    address: "Đà Nẵng",
  },
];

function reducer(state = users, action: any) {
  switch (action.type) {
    case "RENDER":
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default function Bt2() {
  return (
    <div>
      <h1>Bt2</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên người dùng</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th rowSpan={2}>chức năng</th>
          </tr>
        </thead>
        <tbody>
          {store.getState().map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateBirth}</td>
              <td>{user.address}</td>
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