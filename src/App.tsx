import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import Logo from './components/Logo';

const Index = lazy(() => import('./pages/Index'));

const App: Component = () => (
  <>
    <Logo />
    <Routes>
      <Route path="/" component={Index} />
      <Route path="/tx" component={lazy(() => import('./pages/radios/TransmitterPage'))} />
    </Routes>
  </>
);

export default App;
