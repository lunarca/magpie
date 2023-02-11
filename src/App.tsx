import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router";

import Panel from './components/Panel';
import RxTxSelectorPanel from './components/RxTxSelectorPanel';
import Index from './pages';

const App: Component = () => (
  <>
    <Routes>
      <Route path="/" component={Index} />

    </Routes>
  </>
);

export default App;
