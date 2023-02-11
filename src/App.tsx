import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";

const Index = lazy(() => import('./pages/Index'));

const App: Component = () => (
  <>
    <Routes>
      <Route path="/" component={Index} />

    </Routes>
  </>
);

export default App;
