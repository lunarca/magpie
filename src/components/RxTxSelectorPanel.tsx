import { useNavigate } from '@solidjs/router';
import { Component } from 'solid-js';
import Panel from './Panel';
import Button from './util/Button';

type Props = {

}
const RxTxSelectorPanel: Component<Props> = (props) => {

  const navigate = useNavigate()

  const selectRadio = (radio: "rx" | "tx") => () => {
    navigate(`/${radio}`)
  }

  return (
    <Panel title="Choose Radio Type">
      <div class="flex flex-row">
        <Button color="secondary" onClick={selectRadio("rx")}>Receiver (RX)</Button>
        <Button onClick={selectRadio("tx")}>Transmitter (TX)</Button>
      </div>
    </Panel>
  )
}

export default RxTxSelectorPanel