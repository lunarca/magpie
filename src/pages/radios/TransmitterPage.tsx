import { Component, createEffect, createSignal, DEV, Show } from 'solid-js';
import EncoderOptionPanel from '../../components/transmitter/EncoderOptionPanel';
import MessageInput from '../../components/transmitter/MessageInput';
import MessageOptionsPanel, { MessageOptions } from '../../components/transmitter/MessageOptionsPanel';
import PasswordPanel from '../../components/transmitter/PasswordPanel';

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

  const [password, setPassword] = createSignal("")
  const [usePassword, setUsePassword] = createSignal(false)

  createEffect(() => {
    console.log(message())
  })

  return (
    <div class="flex items-center justify-center h-screen">

    <div class="flex flex-row">
      <div class="flex flex-col">
        <MessageInput setMessage={setMessage}/>
        <PasswordPanel password={password()} updatePassword={setPassword}
          usePassword={usePassword()} updateUsePassword={setUsePassword}/>
      </div>
      <div class="flex flex-col">
        <EncoderOptionPanel setEncoding={setEncoding} encoding={encoding()} />
        <MessageOptionsPanel updateMessageOptions={setMessageOptions} messageOptions={messageOptions()}/>
      </div>
      

    </div>
    </div>

  )
}

export default TransmitterPage