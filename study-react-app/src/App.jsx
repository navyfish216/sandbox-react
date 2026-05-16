//import { useEffect, useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from './assets/vite.svg';
//import heroImg from './assets/hero.png';

// 3章まで
import UserList from "./pages/UserList";
import CounterApp from "./components/CounterApp";
import TextInputSample from "./components/TextInputSample";
import ToggleSwitch from "./components/ToggleSwitch";
// 4章：状態のリフトアップとイベント
import TotalDisplay from "./pages/TotalDisplay";
import FormApp from "./components/EventSample/FormApp";
import HoverHint from "./components/EventSample/HoverHint";
import FocusInput from "./components/EventSample/FocusInput";
// 5章：副作用（サイドエフェクト）の理解
import EveryRender from "./components/EffectSample/EveryRender";
import FirstTimeOnly from "./components/EffectSample/FirstTimeOnly";
import NameWatcher from "./components/EffectSample/NameWatcher";
import TimerComponent from "./components/EffectSample/TimerComponent";
import ToggleTimer from "./pages/EffectSample/ToggleTimer";
import './App.css';

function App() {
  return (
    <>
      <ToggleTimer />
      {/*
      <NameWatcher />
      <FirstTimeOnly />
      <EveryRender />

      <FormApp />
      <FocusInput />
      <HoverHint />
      <TotalDisplay />

      <ToggleSwitch />
      <TextInputSample />
      <CounterApp />
      <UserList /> 
      */}
    </>
  );
}
export default App
