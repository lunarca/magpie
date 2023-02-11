import { Component } from 'solid-js';
import Panel from './Panel';
import Button from './util/Button';

type Props = {

}
const RxTxSelectorPanel: Component<Props> = (props) => {
  return (
    <Panel title="Choose Radio Type">
      <div class="flex flex-row">
        <Button color="secondary">Receiver (RX)</Button>
        <Button>Transmitter (TX)</Button>
      </div>
    </Panel>
  )
}

export default RxTxSelectorPanel