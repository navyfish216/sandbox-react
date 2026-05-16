import { useEffect, useState} from 'react';

function FirstTimeOnly () {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('これは最初の1回だけ実行されます');
    setMessage('ようこそ');
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
export default FirstTimeOnly;
