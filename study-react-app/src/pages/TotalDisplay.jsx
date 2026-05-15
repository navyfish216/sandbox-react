import { useState } from 'react';
import CounterApp from "../components/CounterApp";

function TotalDisplay() {
  // ①カウンターAとカウンターBの状態を管理（状態のリフトアップ）
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div>
      {/* ②合計カウントを表示 */}
      <p>合計カウント: {countA + countB}</p>

      <CounterApp count={countA} onIncrement={() => setCountA(countA + 1)} />
      <CounterApp count={countB} onIncrement={() => setCountB(countB + 1)} />
    </div>
  );
}
export default TotalDisplay
