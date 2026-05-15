import { useState } from 'react';

function FocusInput() {
  // マウスが乗っているかどうかの状態を管理する
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <h3>名前を入力してください</h3>
      <input 
        type="text" 
        onFocus={() => setIsFocused(true)} 
        onBlurCapture={() => setIsFocused(false)} 
        plaseholder="ここに入力"
        style={{padding: '8px', border: '2px solid', backgroundColor: isFocused ? 'lightgreen': 'lightgray'}}
      />
    </div>
  );
}
export default FocusInput
