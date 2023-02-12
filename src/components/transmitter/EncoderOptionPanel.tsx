import { Component } from 'solid-js';
import Panel from '../Panel';
import TerminalCheckboxInput from '../util/TerminalCheckboxInput';

type Props = {

  setEncoding: (encoding: string) => void
  encoding: string

}

const EncoderOptionPanel: Component<Props> = (props) => {
  return (
    <div class="w-80 m-2">

      <Panel title="Encoding Options">
        <fieldset class="flex flex-col">
          <legend class="font-bold text-lg">Select encoding type</legend>
          
          <TerminalCheckboxInput fieldName="encoding" value="base64" label="Base 64" handleChange={props.setEncoding} selected={"base64" === props.encoding} />
          <TerminalCheckboxInput fieldName="encoding" value="base32" label="Base 32" handleChange={props.setEncoding} selected={"base32" === props.encoding} />
          <TerminalCheckboxInput fieldName="encoding" value="base16" label="Base 16" handleChange={props.setEncoding} selected={"base16" === props.encoding} />
          
        </fieldset>
      </Panel>
    </div>

  )
}

export default EncoderOptionPanel