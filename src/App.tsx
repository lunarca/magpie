import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import Logo from './components/Logo';

const App: Component = () => (
  <>
    <Logo />
    <Routes>
      <Route path="/" component={lazy(() => import('./pages/IndexPage'))} />
      <Route path="/tx" component={lazy(() => import('./pages/radios/TransmitterPage'))} />
    </Routes>
  </>
);

export default App;
