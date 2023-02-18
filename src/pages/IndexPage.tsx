import { Component } from 'solid-js';
import RxTxSelectorPanel from '../components/RxTxSelectorPanel';

type Props = {

}

const IndexPage: Component<Props> = (props) => {
  return (
    <div class="flex justify-center items-center h-screen">

      <div class="w-fit">
        <RxTxSelectorPanel />
      </div>
    </div>

  )
}

export default IndexPage