import { Component, createEffect, createSignal } from 'solid-js';
import EncoderOptionPanel from '../../components/transmitter/EncoderOptionPanel';
import MessageInput from '../../components/transmitter/MessageInput';

type Props = {

}
const TransmitterPage: Component<Props> = (props) => {

  const [message, setMessage] = createSignal("")
  const [encoding, setEncoding] = createSignal("base64")

  createEffect(() => {
    console.log(message())
  })

  return (
    <div class="grid">
      <MessageInput setMessage={setMessage}/>
      <EncoderOptionPanel setEncoding={setEncoding} encoding={encoding()} />
      <div class="text-black bg-white">
        Message: {message}
        Encoding: {encoding}
      </div>

    </div>

  )
}

export default TransmitterPage