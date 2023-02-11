/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { FirebaseProvider } from 'solid-firebase';
import { firebaseConfig } from './libs/firebase';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <FirebaseProvider config={firebaseConfig}>
    <div class="bg-stone-900 absolute h-screen w-screen ">
      <App />

    </div>
  </FirebaseProvider>
), root!);
