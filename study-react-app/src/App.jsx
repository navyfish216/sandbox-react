import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserList from "./pages/UserList"
import './App.css'

function App() {
  // JavaScriptのイベント処理関数（クリックされたときにアラートを出す）
  const handleClick = () => {
    alert("クリックされました！");
  };

  return (
    <>
      <UserList />
    </>
  )
}
export default App
