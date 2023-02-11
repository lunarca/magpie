import type { Component } from 'solid-js';

import Panel from './components/Panel';
import RxTxSelectorPanel from './components/RxTxSelectorPanel';

const App: Component = () => {
  return (
    <>
      <div class="w-80 h-50 grid">
        <Panel title="Attention!">
          <p>Great holes secretly are digged where earth’s pores ought to suffice, and things have learnt to walk that ought to crawl.</p>
        </Panel>

        <RxTxSelectorPanel />

      </div>
    </>
  );
};

export default App;
