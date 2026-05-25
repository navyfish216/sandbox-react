// Material-UIのレイアウトと入力フィールドコンポーネントをインポート
import {Box, TextField, Stack} from '@mui/material';
// Reactのステート管理フックをインポート
import {useState} from 'react';

function TextFieldExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return(
    // 全体のコンテナ：padding: 3で余白を設定
    <Box sx={{p: 3}} align="left">
      <h2>入力フィールドの例</h2>
      {/* Stackで横並び配置、間隔2、したマージン2 */}
      <Stack spacing={3}>
        {/* 標準的なテキスト入力フィールド */}
        <TextField label="お名前" 
          fullWidth 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* メールアドレス専用の入力フィールド */}
        <TextField label="メールアドレス" 
          type="email" // type="email"でメール入力に最適化
          fullWidth 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* 複数行テキスト入力フィールド */}
        <TextField label="メッセージ" 
          multiline // 複数行入力を可能にする
          rows={4} // 初期表示行数を4行に設定
          fullWidth 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Stack>
    </Box>
  );
}
export default TextFieldExample;