import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import Logo from './components/Logo';

const App: Component = () => (
  <div class="bg-stone-900 absolute h-screen w-screen scanlines">
    <Logo />

    <div class="w-full h-content-wrapper container overflow-auto">
      <Routes>
        <Route path="/" component={lazy(() => import('./pages/IndexPage'))} />
        <Route path="/tx" component={lazy(() => import('./pages/radios/TransmitterPage'))} />
      </Routes>  
    </div>
  </div>
);

export default App;
