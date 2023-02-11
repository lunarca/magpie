import { Component } from 'solid-js';
import Panel from '../Panel';
import BoxRadioButton from '../util/BoxRadioButton';

type Props = {

}

const EncoderOptionPanel: Component<Props> = (props) => {
  return (
    <div class="w-72">

      <Panel title="Encoding Options">
        <fieldset class="flex flex-col">
          <legend class="font-bold text-lg">Select encoding type</legend>
          
          <BoxRadioButton fieldName="encoding" value="base64" label="Base 64" />
          <BoxRadioButton fieldName="encoding" value="base32" label="Base 32" />
          <BoxRadioButton fieldName="encoding" value="base16" label="Base 16" />
          
        </fieldset>
      </Panel>
    </div>

  )
}

export default EncoderOptionPanel