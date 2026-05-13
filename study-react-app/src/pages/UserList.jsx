import UserTable from "../components/UserTable"
import UserCount from "../components/UserCount"

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

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>ユーザー一覧</div>
      <UserTable />
      <UserCount />
    </div>
  )
}
export default UserList
