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
    <div class="h-full">
      <Panel title="Password Options">
        <div class="flex flex-col">
          <TerminalCheckboxInput label="Use Password?" checked={props.usePassword} handleChange={props.updateUsePassword}/>
          <input disabled={!props.usePassword} placeholder="Password" 
            class="bg-stone-700 border-none py-1 px-2 my-2 outline-none disabled:bg-stone-800 disabled:placeholder:text-stone-600 disabled:border-stone-600" 
            value={props.password} 
            onInput={(event) => {props.updatePassword(event.currentTarget.value)}} />
        </div>
      </Panel>
    </div>
  )
}

export default PasswordPanel