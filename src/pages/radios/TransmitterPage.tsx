import { Component, createEffect, createSignal, DEV, Show } from 'solid-js';
import * as Tone from 'tone';
import EncoderOptionPanel from '../../components/transmitter/EncoderOptionPanel';
import MessageInput from '../../components/transmitter/MessageInput';
import MessageOptionsPanel, { MessageOptions } from '../../components/transmitter/MessageOptionsPanel';
import PasswordPanel from '../../components/transmitter/PasswordPanel';
import TransmitterPanel from '../../components/transmitter/TransmitterPanel';
import { noteToSignalMap, playMockingbirdSignal, runSpeech, speakNumbers } from '../../libs/audio';
import { messageToNumbers, numbersToMessage } from '../../libs/messageUtils';
import { getDeSampler } from '../../libs/samplers/deSampler';

type Props = {

}
const TransmitterPage: Component<Props> = (props) => {

  const [message, setMessage] = createSignal("")
  const [encoding, setEncoding] = createSignal("base16")
  const [messageOptions, setMessageOptions] = createSignal<MessageOptions>({
    repeats: 2,
    language: "de",
    numbersInSegment: 5
  })

  const [password, setPassword] = createSignal("")
  const [usePassword, setUsePassword] = createSignal(false)

  const [deSampler, setDeSampler] = createSignal<Tone.Sampler|null>(null);
  const [samplesLoaded, setSamplesLoaded] = createSignal(false);

  createEffect(() => {
    setDeSampler(getDeSampler())

    Tone.loaded().then(() => {
      console.log("Samples loaded")
      setSamplesLoaded(true)
    })
  })

  const testSignal = () => {
    messageToNumbers(message(), encoding()).then(numbers => {
      console.log(numbers)
      runSpeech(deSampler(), numbers, "de", encoding())
    })
  }

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

      <div class="flex flex-col">
        {/* TODO */}
        <TransmitterPanel testSignal={testSignal} transmitSignal={() => {}} />
      </div>
      

    </div>
    </div>

  )
}

export default TransmitterPage