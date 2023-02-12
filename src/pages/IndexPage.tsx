import { Component } from 'solid-js';
import RxTxSelectorPanel from '../components/RxTxSelectorPanel';

type Props = {

}

const IndexPage: Component<Props> = (props) => {
  return (
    <div class="grid justify-center content-center h-screen">

      <div class="w-96">
        <RxTxSelectorPanel />
      </div>
    </div>

  )
}

export default IndexPage