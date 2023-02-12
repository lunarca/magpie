import { Component, createEffect, createSignal, DEV, Show } from 'solid-js';
import EncoderOptionPanel from '../../components/transmitter/EncoderOptionPanel';
import MessageInput from '../../components/transmitter/MessageInput';
import MessageOptionsPanel, { MessageOptions } from '../../components/transmitter/MessageOptionsPanel';

type Props = {

}
const TransmitterPage: Component<Props> = (props) => {

  const [message, setMessage] = createSignal("")
  const [encoding, setEncoding] = createSignal("base64")
  const [messageOptions, setMessageOptions] = createSignal<MessageOptions>({
    repeats: 2,
    language: "german",
    numbersInSegment: 5
  })

  createEffect(() => {
    console.log(message())
  })

  return (
    <div class="grid">
      <MessageInput setMessage={setMessage}/>
      <EncoderOptionPanel setEncoding={setEncoding} encoding={encoding()} />
      <MessageOptionsPanel updateMessageOptions={setMessageOptions} messageOptions={messageOptions()}/>

    </div>

  )
}

export default TransmitterPage