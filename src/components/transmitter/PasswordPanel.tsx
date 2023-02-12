import { Component } from 'solid-js';
import Panel from '../Panel';
import TerminalCheckboxInput from '../util/TerminalCheckboxInput';

type Props = {
  password: string,
  updatePassword: (password: string) => void,

  usePassword: boolean,
  updateUsePassword: (usePassword: boolean) => void

}

const PasswordPanel: Component<Props> = (props) => {
  return (
    <div class="h-[120px] w-96 m-2">
      <Panel title="Password Options">
        <div class="flex flex-col">
          <TerminalCheckboxInput label="Use Password?" checked={props.usePassword} handleChange={props.updateUsePassword}/>
          {"" + props.usePassword}
        </div>
      </Panel>
    </div>
  )
}

export default PasswordPanel