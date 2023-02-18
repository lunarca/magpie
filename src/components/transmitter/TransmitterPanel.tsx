import { Component } from 'solid-js';
import Panel from '../Panel';
import Button from '../util/Button';

type Props = {
  testSignal: () => void,
  stopTest: () => void,
  transmitSignal: () => void,
}

const TransmitterPanel: Component<Props> = (props) => {
  return (
    <div class="h-full">
      <Panel title="Transmitter">
        <Button color="primary" onClick={props.testSignal}>Test Signal</Button>

        <Button color="RED" onClick={props.transmitSignal}>Transmit Signal</Button>

        <Button color="secondary" onClick={props.stopTest}>Stop Audio</Button>
      </Panel>
    </div>
  )
}

export default TransmitterPanel