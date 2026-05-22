import {useState} from "react";

function ValidationForm() {
  // ステートの定義
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // フォームのデフォルトの送信を布施後
    // これをしないとページがリロードされてしまう
    e.preventDefault();

    // ifで作成したバリデーション（必須チェックと文字数）
    if (name.trim() === "") {
      setError("※名前は必須です");
    } else if (name.length < 2) {
      setError("※2文字以上で入力してください");
    } else {
      setError(""); // エラーを消す
      alert(`送信された名前：${name}`)
    }
  }

  return (
    <div>
      <h2>バリデーションフォームの例</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} plaseholder="名前を2文字以上で入力" />
        <p style={{color: "red"}}>{error}</p>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default ValidationForm;
