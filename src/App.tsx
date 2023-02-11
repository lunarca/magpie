import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Panel from './components/Panel';

const App: Component = () => {
  return (
    <>
      <div class="w-80 h-50">
        <Panel title="Test Panel"/>

      </div>
    </>
  );
};

export default App;
