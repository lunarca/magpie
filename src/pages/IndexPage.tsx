import { Component } from 'solid-js';
import RxTxSelectorPanel from '../components/RxTxSelectorPanel';

type Props = {

}

const IndexPage: Component<Props> = (props) => {
  return (
    <div class="grid align-center justify-center w-full ">
      <div class="h-fit">
        <RxTxSelectorPanel />
      </div>
    </div>

  )
}

export default IndexPage