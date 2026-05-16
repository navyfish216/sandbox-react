import {useState} from 'react';
import TimerComponent from "../../components/EffectSample/TimerComponent";

function ToggleTimer () {
  // タイマーの表示切替
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <h1>useEffectのクリーンアップ例</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'タイマーを止める' : 'タイマーを再開する'}
      </button>

      {/* タイマーの表示・非表示 */}
      {showTimer && <TimerComponent /> }
    </div>
  );
}
export default ToggleTimer;
