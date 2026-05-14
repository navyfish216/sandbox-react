import UserTable from "../components/UserTable";
import UserCount from "../components/UserCount";

function UserList() {
  // 全体の枠や背景のスタイル
  const containerStyle = {
    border: "2px solid #222",
    borderRadius: "10px",
    width: "400px",
    margin: "40px auto",
    padding: "24px",
    background: "#fff"
  };

  // タイトルのスタイル
  const titleStyle = {
    textAlign: "center",
    fintsize: "22px",
    marginBottom: "20px"
  };

  // ユーザーデータの配列
  const users = [
    { id: 1, name: "山田太郎", age: 33 },
    { id: 2, name: "佐藤花子", age: 28 },
    { id: 3, name: "南原一平", age: 52 },
    { id: 4, name: "徳川家康", age: 45 }
  ]

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>ユーザー一覧</div>
      <UserTable users={users} />
      <UserCount userCount={users.length}/>
    </div>
  );
}
export default UserList
