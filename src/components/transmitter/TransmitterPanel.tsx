import { Component } from 'solid-js';
import Panel from '../Panel';
import Button from '../util/Button';

type Props = {
  testSignal: () => void,
  transmitSignal: () => void,
}

const TransmitterPanel: Component<Props> = (props) => {
  return (
    <div class="h-[464px] w-96 m-2">
      <Panel title="Transmitter">
        <Button color="primary" onClick={props.testSignal}>Test Signal</Button>
      </Panel>
    </div>
  )
}

export default TransmitterPanel