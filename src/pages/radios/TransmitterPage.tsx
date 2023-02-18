import { Component, createEffect, createSignal, DEV, Show } from 'solid-js';
import * as Tone from 'tone';
import EncoderOptionPanel from '../../components/transmitter/EncoderOptionPanel';
import MessageInput from '../../components/transmitter/MessageInput';
import MessageOptionsPanel, { MessageOptions } from '../../components/transmitter/MessageOptionsPanel';
import PasswordPanel from '../../components/transmitter/PasswordPanel';
import TransmitterPanel from '../../components/transmitter/TransmitterPanel';
import { noteToSignalMap, scheduleMockingbirdSignal, playSignal, scheduleNumbers } from '../../libs/audio';
import { messageToNumbers, numbersToMessage } from '../../libs/messageUtils';
import { getDeSampler } from '../../libs/samplers/deSampler';
import styles from "./TransmitterPage.module.css"

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
      playSignal(deSampler(), numbers, encoding())
    })
  }

  return (
    <div class="flex justify-center items-center h-full">

      <div class={`grid ${styles.txPageGrid} gap-4 justify-center items-center w-[75vw]`}>

        <div class={`${styles.areaMessage} h-full`}>
          <MessageInput setMessage={setMessage}/>
        </div>

        <div class={`${styles.areaPassword} h-full`}>
          <PasswordPanel password={password()} updatePassword={setPassword}
            usePassword={usePassword()} updateUsePassword={setUsePassword}/>
        </div>
        
        <div class={`${styles.areaEncoding} h-full`}>
          <EncoderOptionPanel setEncoding={setEncoding} encoding={encoding()} />
        </div>

        <div class={`${styles.areaOptions} h-full`}>
          <MessageOptionsPanel updateMessageOptions={setMessageOptions} messageOptions={messageOptions()}/>
        </div>

        <div class={`${styles.areaTx} h-full`}>
          <TransmitterPanel testSignal={testSignal} transmitSignal={() => {}} />
        </div>
      </div>
    </div>
          
  )
}

export default TransmitterPage