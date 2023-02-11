import { Component } from 'solid-js';
import RxTxSelectorPanel from '../components/RxTxSelectorPanel';

type Props = {

}

const Index: Component<Props> = (props) => {
  return (
    <div class="grid justify-center content-center h-screen">

      <div class="w-96">
        <RxTxSelectorPanel />
      </div>
    </div>

  )
}

export default Index