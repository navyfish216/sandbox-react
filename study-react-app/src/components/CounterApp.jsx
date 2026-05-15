import { useState } from 'react';

function CounterApp({count, onIncrement}) {
  // ①useStateを使ってカウントのステートを定義
  //const [count, setCount] = useState(1);

  const handleClick = () => {
    // ②ボタンがクリックされたときにカウントを1増やす
    //setCount(count + 1);
    onIncrement();
  };

  return (
    <div>
      {/* ③カウントの値を表示 */}
      <p>現在のカウント: {count}</p>
      {/* ④クリックイベント */}
      <button onClick={handleClick}>+1する</button>
    </div>
  );
}
export default CounterApp
