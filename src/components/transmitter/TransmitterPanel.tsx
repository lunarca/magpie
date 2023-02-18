import { Component } from 'solid-js';
import Panel from '../Panel';
import Button from '../util/Button';
import Tuner from '../util/Tuner';

type Props = {
  testSignal: () => void,
  stopTest: () => void,
  transmitSignal: () => void,
}

const TransmitterPanel: Component<Props> = (props) => {
  return (
    <div class="h-full">
      <Panel title="Transmitter">

        <div class="flex flex-col gap-2">

          <Tuner frequency={127.300} />

          <div class="flex flex-row justify-between">
            <Button color="primary" onClick={props.testSignal}>Test Signal</Button>
            <Button color="secondary" onClick={props.stopTest}>Stop Audio</Button>
          </div>
          
          <div class="w-full flex">
            <Button color="RED" flexGrow onClick={props.transmitSignal}>Transmit Signal</Button>
          </div>
        </div>
        

      </Panel>
    </div>
  )
}

export default TransmitterPanel