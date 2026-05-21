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
// 6章：コンテキストの理解
import PropsDrillingView from "./pages/PropsDrillingSample/PropsDrillingView";
import UserContextView from "./pages/ContextSample/UserContextView";
// 7章：React Routerによるページ遷移
import RouterView from "./pages/RouterSample/RouterView";
import UseParamsSample from "./pages/RouterSample/UseParamsSample";
import UseParamsMulti from "./pages/RouterSample/UseParamsMulti";
import './App.css';

function App() {
  return (
    <>
      <UseParamsMulti />
      {/*
      <UseParamsSample />
      <RouterView />
      <UserContextView />
      <PropsDrillingView />

      <ToggleTimer />
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
