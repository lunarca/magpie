import { Component, createEffect, createSignal } from 'solid-js';
import EncoderOptionPanel from '../../components/transmitter/EncoderOptionPanel';
import MessageInput from '../../components/transmitter/MessageInput';

type Props = {

}
const TransmitterPage: Component<Props> = (props) => {

  const [message, setMessage] = createSignal("")

  createEffect(() => {
    console.log(message())
  })

  return (
    <div class="grid">
      <MessageInput setMessage={setMessage}/>
      <EncoderOptionPanel />
    </div>
  )
}

export default TransmitterPage