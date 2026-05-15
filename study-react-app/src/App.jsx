//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from './assets/vite.svg';
//import heroImg from './assets/hero.png';
import TotalDisplay from "./pages/TotalDisplay";
import UserList from "./pages/UserList";
import CounterApp from "./components/CounterApp";
import TextInputSample from "./components/TextInputSample";
import ToggleSwitch from "./components/ToggleSwitch";
import FormApp from "./components/EventSample/FormApp";
import HoverHint from "./components/EventSample/HoverHint";
import FocusInput from "./components/EventSample/FocusInput";
import './App.css';

function App() {
  return (
    <>
      <FormApp />
      {/*
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
