import {useEffect, useState} from 'react';

function FetchExample() {
  // ステート宣言：サーバーから取得したユーザー一覧を保存
  const [users, setUsers] = useState([]);
  // 新規ユーザー追加用の入力フィールド
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // APIのベースURL（JSON Serverのローカル開発サーバー）
  const baseURL = 'http://localhost:3001/users';

  // GET:サーバーからユーザー一覧を取得する関数
  const fetchUsers = async () => {
    try {
      // GETリクエストを送信
      const response = await fetch(baseURL);
      const data = await response.json();
      // 取得したデータをステートに保存
      setUsers(data);
    } catch (error) {
      console.error('取得エラー：', error);
    } 
  };

  // POST:新しいユーザーをサーバーに追加する関数
  const addUser = async () => {
    try {
      const newUser = {name, email};
      // POSTリクエストを送信
      await fetch(baseURL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      // 入力フィールドをクリア
      setName('');
      setEmail('');
      // 追加後にユーザー一覧を再取得して画面を更新
      fetchUsers();
    } catch (error) {
      console.error('追加エラー：', error);
    } 
  };

  // PUT:既存ユーザーの情報を更新する関数(最後のユーザーを更新)
  const updateUser = async () => {
    // ユーザーが存在しない場合は何もしない
    if (users.length === 0) return;
    const lastUserId = users[users.length - 1].id;

    // 更新内容
    //const updateUser = {
    //  name: '更新された名前',
    //  email: 'updated@example.com' 
    //};
    const updateUser = {name, email};

    try {
      // PUTリクエストを送信（既存データの完全置換）
      await fetch(`${baseURL}/${lastUserId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateUser)
      });
      // 入力フィールドをクリア
      setName('');
      setEmail('');
      // 更新後にユーザー一覧を再取得
      fetchUsers();
    } catch (error) {
      console.error('更新エラー：', error);
    } 
  };

  // DELETE:最後のユーザーを削除する関数
  const deleteLastUser = async () => {
    // ユーザーが存在しない場合は何もしない
    if (users.length === 0) return;
    const lastUserId = users[users.length - 1].id;

    try {
      // DELETEリクエストを送信
      await fetch(`${baseURL}/${lastUserId}`, {
        method: "DELETE",
      });
      // 削除後にユーザー一覧を再取得
      fetchUsers();
    } catch (error) {
      console.error('削除エラー：', error);
    } 
  };

  // コンポーネント初回表示時にユーザー一覧を取得
  useEffect(() => {
    fetchUsers()
  }, []); // 空の依存配列 = 初回のみ実行

  return (
    <div>
      <h2>JSON Server通信例</h2>

      {/* 新規ユーザー追加フォーム */}
      <div>
        <input type="text" placeholder="名前" value={name} 
          onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="メール" value={email} 
          onChange={e => setEmail(e.target.value)} />
      </div>
      <hr />
      {/* CRUD操作ボタン */}
      <button onClick={addUser}>追加</button>
      <button onClick={updateUser}>最後のユーザーを更新</button>
      <button onClick={deleteLastUser}>最後のユーザーを削除</button>
      {/* ユーザー一覧表示 */}
      <ul style={{width: 'fit-content', margin: 'auto'}}>
        {users.map(user => (
          <li key={user.id}>{user.name}({user.email})</li>
        ))}
      </ul>
    </div>
  );
}
export default FetchExample;
