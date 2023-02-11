import { Component, createEffect, createSignal } from 'solid-js';
import MessageInput from '../../components/transmitter/MessageInput';

type Props = {

}
const Transmitter: Component<Props> = (props) => {

  const [message, setMessage] = createSignal("")

  createEffect(() => {
    console.log(message())
  })

  return (
    <div class="grid">
      <MessageInput setMessage={setMessage}/>
    </div>
  )
}

export default Transmitter