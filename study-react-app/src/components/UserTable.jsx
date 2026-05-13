import UserRow from "./UserRow"

function UserTable() {
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
        <UserRow />
        <UserRow />
        <UserRow />
      </tbody>
    </table>
  )
}

export default UserTable
