import {useNavigate} from "react-router-dom";

export default function About() {
  // ナビゲーション用フック
  const navigate = useNavigate();

  return (
    <div>
      <h2>📖このサイトについて</h2>
      {/* ボタンを押すとContactページへ移動 */}
      <button onClick={() => navigate("/contact")}>Contactへ移動</button>
    </div>
  );
}