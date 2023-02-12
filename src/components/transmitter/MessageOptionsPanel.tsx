import { Component, createEffect, createSignal } from 'solid-js';
import Panel from '../Panel';
import BoxRadioButton from '../util/BoxRadioButton';
import SliderInput from '../util/SliderInput';


export type MessageOptions = {
  numbersInSegment: number,
  repeats: number,
  language: string
}

type Props = {
  updateMessageOptions: (updatedOptions: MessageOptions) => void
  messageOptions: MessageOptions
}

const MessageOptionsPanel: Component<Props> = (props) => {

  const [numbersInSegment, setNumbersInSegment] = createSignal(props.messageOptions.numbersInSegment);
  const [repeats, setRepeats] = createSignal(props.messageOptions.repeats);
  const [langauge, setLanguage] = createSignal(props.messageOptions.language);

  createEffect(() => {
    props.updateMessageOptions({ numbersInSegment: numbersInSegment(), repeats: repeats(), language: langauge() })
  })

  return (
    <div class="w-72 m-2">
      <Panel title="Message Options">
        <div class="flex flex-col">
          <SliderInput legend="Numbers in each segment" min={1} max={10}
            value={numbersInSegment()} changeValue={setNumbersInSegment} />

          <SliderInput legend="Times segments repeat" min={1} max={5}
            value={repeats()} changeValue={setRepeats} />

          <fieldset class="flex flex-col">
            <legend class="font-bold text-lg">Transmission Language</legend>

            <BoxRadioButton fieldName="language" value="english" 
              label="English" handleChange={setLanguage} selected={langauge() === "english"} />

            <BoxRadioButton fieldName="language" value="german"
              label="Deutsch" handleChange={setLanguage} selected={langauge() === "german"} />

            <BoxRadioButton fieldName="language" value="japanese"
              label="日本語" handleChange={setLanguage} selected={langauge() === "japanese"} />
          </fieldset>
        </div>
      </Panel>
    </div>
  )
}

export default MessageOptionsPanel