import UserRow from "./UserRow";

function UserTable(props) {
  // テーブル全体のスタイル
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    margin: "auto"
  };

  // ヘッダー行（見出しセル）のスタイル
  const thStyle = {
    border: "1px solid #222",
    padding: "8px",
    background: "#c8e6c9"
  };
  
  // ユーザーデータの配列
  //const users = [
  //  { id: 1, name: "山田太郎", age: 33 },
  //  { id: 2, name: "佐藤花子", age: 28 }
  //]

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>ID</th>
          <th style={thStyle}>名前</th>
          <th style={thStyle}>年齢</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <UserRow
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
          />
        ))}
      </tbody>
    </table>
  );
}
export default UserTable
